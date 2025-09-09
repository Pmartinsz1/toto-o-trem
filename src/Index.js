const keepAlive = require("./server");
keepAlive();

require("dotenv").config();

const { 
  Client, GatewayIntentBits, Partials,
  ActionRowBuilder, ButtonBuilder, ButtonStyle, 
  ModalBuilder, TextInputBuilder, TextInputStyle, 
  PermissionsBitField, EmbedBuilder 
} = require("discord.js");

const Database = require("better-sqlite3");
const perguntas = require("./perguntas.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessageReactions
  ],
  partials: [Partials.Message, Partials.Channel, Partials.Reaction]
});

// ---------------- DB ----------------
const db = new Database("economia.db");
db.prepare("CREATE TABLE IF NOT EXISTS users (id TEXT PRIMARY KEY, saldo INTEGER, cargo TEXT, last_salary INTEGER)").run();

// ---------------- Salários ----------------
const salarios = {
  "Sua majestade imperial": 100000,
  "Alta chancelaria imperial": 80000,
  "Ministerio de guerra": 70000,
  "Marechal imperial": 90000,
  "Imperador": 120000,
  "Diretor do escritorio de propaganda": 60000,
  "Ministro da economia": 85000,
  "Ministro da infraestrutura": 80000,
  "Engenheiro-mor do imperio": 75000,
  "Administração Civil": 15000,
  "Política": 16000,
  "Diplomata": 14000,
  "Militar - Infantaria": 18000,
  "Militar - Estratégia": 20000,
  "Militar - Logística": 18000,
  "Militar": 15000,
  "Guarda Imperial": 17000,
  "Polícia - Patrulha": 12000,
  "Polícia - Investigação": 15000,
  "Polícia - Operações Especiais": 20000,
  "Médico": 25000,
  "Enfermeiro": 18000,
  "Socorrista": 17000,
  "Pesquisador": 22000,
  "Combate a incêndio": 16000,
  "Resgate em desastres": 16000,
  "Proteção Civil": 15000,
  "Empresário": 30000,
  "Funcionário": 12000,
  "Produtor": 18000,
  "Professor": 15000,
  "Jornalista": 14000,
  "Artista": 20000,
  "Líder religioso": 13000
};

const cargosSemQuiz = [
  "Sua majestade imperial",
  "Alta chancelaria imperial",
  "Ministerio de guerra",
  "Marechal imperial",
  "Imperador",
  "Diretor do escritorio de propaganda",
  "Ministro da economia",
  "Ministro da infraestrutura",
  "Engenheiro-mor do imperio"
];

function getCargo(member) {
  const cargos = Object.keys(salarios);
  return member.roles.cache.find(role => cargos.includes(role.name))?.name || null;
}

// ---------------- Quiz RP Config ----------------
const quizSessions = {};
const emojis = ["1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣"];

const specializations = {
  "Governamental": [
    { name: "Administração civil", roleId: "1414692799651123220" },
    { name: "Político", roleId: "1414693371267780709" },
    { name: "Diplomata", roleId: "1414693467006963853" }
  ],
  "Segurança/Ordem": [
    { name: "Patrulha/Ordem", roleId: "1414694119694925976" },
    { name: "Investigação", roleId: "1414694156831559841" },
    { name: "Operações Especiais", roleId: "1414694213773426788" }
  ],
  "Saúde": [
    { name: "Médico", roleId: "1414694393306157158" },
    { name: "Enfermeiro", roleId: "1414694458594955355" },
    { name: "Socorrista/paramédico", roleId: "1414694513271902350" },
    { name: "Pesquisador", roleId: "1414694558402478171" }
  ],
  "Serviços Públicos": [
    { name: "Combate a incêndio", roleId: "1414695273627783189" },
    { name: "Resgate em desastres", roleId: "1414695424320737342" },
    { name: "Proteção Civil", roleId: "1414695500485234709" }
  ],
  "Comércio/Negócios": [
    { name: "Empresário", roleId: "1414695642395312270" },
    { name: "Funcionário", roleId: "1414695713878839368" },
    { name: "Produtor", roleId: "1414695777372082288" }
  ],
  "Cultura/Sociedade": [
    { name: "Professor", roleId: "1414696153756467220" },
    { name: "Jornalista", roleId: "1414696205421772811" },
    { name: "Artista", roleId: "1414696373936324778" },
    { name: "Líder Religioso", roleId: "1414696420233187479" }
  ]
};

// ---------------- Ready ----------------
client.once("ready", () => {
  console.log(`✅ Bot online como ${client.user.tag}`);
});

// ---------------- Painéis ----------------
client.on("messageCreate", async (message) => {
  if (message.content === "!painel") {
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder().setCustomId("saldo").setLabel("💰 Saldo").setStyle(ButtonStyle.Primary),
      new ButtonBuilder().setCustomId("salario").setLabel("💼 Salário").setStyle(ButtonStyle.Success),
      new ButtonBuilder().setCustomId("transferir").setLabel("💸 Transferir").setStyle(ButtonStyle.Secondary)
    );
    await message.reply({ content: "📌 Painel de Economia", components: [row] });
  }

  if (message.content === "!painelquiz") {
    if (!message.member.permissions.has(PermissionsBitField.Flags.Administrator)) 
      return message.channel.send("❌ Apenas administradores podem usar este comando.");

    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("startQuiz")
        .setLabel("Iniciar Quiz RP")
        .setStyle(ButtonStyle.Primary)
    );

    await message.channel.send({ content: "🎯 Clique no botão abaixo para iniciar o Quiz RP:", components: [row] });
    setTimeout(() => message.delete().catch(() => {}), 3000);
  }
});

// ---------------- Interações ----------------
client.on("interactionCreate", async (interaction) => {
  if (!interaction.isButton() && !interaction.isModalSubmit()) return;

  const userId = interaction.user.id;
  const now = Date.now();
  let user = db.prepare("SELECT * FROM users WHERE id = ?").get(userId);
  if (!user) {
    db.prepare("INSERT INTO users (id, saldo, cargo, last_salary) VALUES (?, ?, ?, ?)").run(userId, 0, null, 0);
    user = { id: userId, saldo: 0, cargo: null, last_salary: 0 };
  }

  // ---------- Economia ----------
  if (interaction.customId === "saldo") {
    await interaction.deferReply({ ephemeral: true });
    return interaction.editReply(`💰 Seu saldo atual é: **${user.saldo}** moedas.`);
  }

  if (interaction.customId === "salario") {
    await interaction.deferReply({ ephemeral: true });

    const cargo = getCargo(interaction.member);
    if (!cargo) return interaction.editReply("⚠️ Você não tem um cargo válido para receber salário.");

    const salario = salarios[cargo];
    if (!salario) return interaction.editReply("⚠️ Seu cargo não possui salário definido.");

    const cooldown = 1 * 60 * 60 * 1000; // 1h
    if (now - user.last_salary < cooldown) {
      const restante = Math.ceil((cooldown - (now - user.last_salary)) / 3600000);
      return interaction.editReply(`⏳ Você já recebeu seu salário. Tente novamente em **${restante}h**.`);
    }

    if (cargosSemQuiz.includes(cargo)) {
      db.prepare("UPDATE users SET saldo = saldo + ?, last_salary = ? WHERE id = ?").run(salario, now, userId);
      return interaction.editReply(`💼 Cargo **${cargo}** não precisa de quiz.\n✅ Você recebeu **${salario}** moedas.`);
    }

    const perguntasCargo = perguntas[cargo];
    if (!perguntasCargo) return interaction.editReply("⚠️ Não há perguntas configuradas para o seu cargo.");

    const pergunta = perguntasCargo[Math.floor(Math.random() * perguntasCargo.length)];
    const row = new ActionRowBuilder().addComponents(
      ...Object.entries(pergunta.opcoes).map(([key, value]) =>
        new ButtonBuilder()
          .setCustomId(`resposta_${key}_${cargo}_${pergunta.correta}_${salario}`)
          .setLabel(`${key}: ${value}`)
          .setStyle(ButtonStyle.Secondary)
      )
    );
    return interaction.editReply({ content: `❓ **${pergunta.pergunta}**`, components: [row] });
  }

  if (interaction.customId.startsWith("resposta_")) {
    const [, resposta, cargo, correta, salario] = interaction.customId.split("_");
    if (resposta === correta) {
      db.prepare("UPDATE users SET saldo = saldo + ?, last_salary = ? WHERE id = ?").run(Number(salario), now, userId);
      return interaction.update({ content: `✅ Resposta correta!\n💰 Você recebeu **${salario}** moedas.`, components: [] });
    } else {
      return interaction.update({ content: "❌ Resposta incorreta. Tente novamente em 1h.", components: [] });
    }
  }

  if (interaction.customId === "transferir") {
    const modal = new ModalBuilder().setCustomId("modal_transferir").setTitle("💸 Transferência");
    const idInput = new TextInputBuilder().setCustomId("destino").setLabel("ID ou @ do usuário").setStyle(TextInputStyle.Short).setRequired(true);
    const valorInput = new TextInputBuilder().setCustomId("valor").setLabel("Valor a transferir").setStyle(TextInputStyle.Short).setRequired(true);
    modal.addComponents(
      new ActionRowBuilder().addComponents(idInput),
      new ActionRowBuilder().addComponents(valorInput)
    );
    return interaction.showModal(modal);
  }

  if (interaction.customId === "modal_transferir") {
    const destino = interaction.fields.getTextInputValue("destino").replace(/[<@!>]/g, "");
    const valor = Number(interaction.fields.getTextInputValue("valor"));

    if (isNaN(valor) || valor <= 0) return interaction.reply({ content: "⚠️ Valor inválido.", ephemeral: true });
    if (user.saldo < valor) return interaction.reply({ content: "⚠️ Você não tem saldo suficiente.", ephemeral: true });

    db.prepare("INSERT OR IGNORE INTO users (id, saldo, cargo, last_salary) VALUES (?, ?, ?, ?)").run(destino, 0, null, 0);
    db.prepare("UPDATE users SET saldo = saldo - ? WHERE id = ?").run(valor, userId);
    db.prepare("UPDATE users SET saldo = saldo + ? WHERE id = ?").run(valor, destino);

    return interaction.reply({ content: `✅ Transferido **${valor}** moedas para <@${destino}>.`, ephemeral: true });
  }

  // ---------- Quiz RP ----------
  if (interaction.customId === "startQuiz") {
    const user = interaction.user;
    const quizChannel = await interaction.guild.channels.create({
      name: `quiz-${user.username}`,
      type: 0,
      permissionOverwrites: [
        {
          id: interaction.guild.roles.everyone.id,
          deny: [PermissionsBitField.Flags.ViewChannel]
        },
        {
          id: user.id,
          allow: [PermissionsBitField.Flags.ViewChannel, PermissionsBitField.Flags.SendMessages]
        }
      ]
    });

    await interaction.reply({ content: `📩 Quiz iniciado em ${quizChannel}`, ephemeral: true });

    const embed = new EmbedBuilder()
      .setTitle("🎯 Quiz RP Avançado")
      .setDescription("**Etapa 1 – Escolha de Grande Área**\nEscolha a opção que mais combina com você:\n\n" +
        Object.keys(specializations).map((a,i)=>`${emojis[i]} ${a}`).join("\n"))
      .setColor(0x3498db);

    const quizMessage = await quizChannel.send({ embeds: [embed] });
    for(let i=0; i<Object.keys(specializations).length; i++) await quizMessage.react(emojis[i]);

    const filter = (reaction, userR) => emojis.slice(0, Object.keys(specializations).length).includes(reaction.emoji.name) && userR.id === user.id;
    const collector = quizMessage.createReactionCollector({ filter, max: 1, time: 45000 });

    collector.on('collect', async r => {
      const index = emojis.indexOf(r.emoji.name);
      const selectedArea = Object.keys(specializations)[index];
      quizSessions[user.id] = { area: selectedArea };

      const specs = specializations[selectedArea];
      const embed2 = new EmbedBuilder()
        .setTitle(`🛡️ Especialização em ${selectedArea}`)
        .setDescription("Escolha sua especialização:\n\n" +
          specs.map((s,i)=>`${emojis[i]} ${s.name}`).join("\n"))
        .setColor(0x2ecc71);

      const specMsg = await quizChannel.send({ embeds: [embed2] });
      for(let i=0; i<specs.length; i++) await specMsg.react(emojis[i]);

      const specCollector = specMsg.createReactionCollector({ filter, max: 1, time: 45000 });
      specCollector.on('collect', async r2 => {
        const specIndex = emojis.indexOf(r2.emoji.name);
        const chosenSpec = specs[specIndex];

        quizSessions[user.id].specialization = chosenSpec.name;

        const member = await interaction.guild.members.fetch(user.id);
        if(member && chosenSpec.roleId) await member.roles.add(chosenSpec.roleId).catch(console.error);

        const finishRow = new ActionRowBuilder().addComponents(
          new ButtonBuilder()
            .setCustomId("finishQuiz")
            .setLabel("Finalizar Quiz")
            .setStyle(ButtonStyle.Danger)
        );

        await quizChannel.send({ content: `✅ **Você escolheu:** ${selectedArea} → ${chosenSpec.name}\n🎨 Cargo atribuído automaticamente!`, components: [finishRow] });
      });
    });

    collector.on('end', collected => {
      if(collected.size === 0) quizChannel.send("⏰ Tempo esgotado para escolher área!");
    });
  }

  if (interaction.customId === "finishQuiz") {
    const member = await interaction.guild.members.fetch(interaction.user.id);
    if(member) {
      await interaction.channel.permissionOverwrites.edit(member.id, { ViewChannel: false });
      await interaction.reply({ content: "✅ Quiz finalizado! Você não pode mais acessar este canal.", ephemeral: true });
    }
  }
});

// ---------------- Login ----------------
require("dotenv").config();

client.login(process.env.DISCORD_TOKEN);