
module.exports = {
    mailServer: {
        port: 465,
        host: 'smtp.gmail.com',
    },
    forwardTo: [
        'coinproject3@gmail.com' // <- X ist Eure Nummer
    ],
    log: false,
    configToken: false, // Zur Konfiguration hier den Token eintragen.
    users: {
        U1830: { // <- Slack-User-Id, diesen Abschnitt für jeden Benutzer anlegen
            name: 'Mergim Alija', // <- Name-Eintragen
            token: 'xoxp-35256986693-35253266022-37141389458-5818e6143e', // API-Token (https://api.slack.com/docs/oauth-test-tokens)
            isAdmin: true, // Es darf nur einen 'Admin' geben, dieser muss Mitglied in allen Channels sein
            mail: {
                auth: {
                    user: 'mergim.alija1992@gmail.com', // Mail-Benutzername
                    pass: 'Error321!' // Mail-Password
                }
            }
        }
    }
};