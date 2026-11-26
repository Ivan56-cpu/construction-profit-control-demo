# AAC Core — baseline tecnica v0.1
Data: 26 novembre 2026. Stato: prototipo, produzione non autorizzata.

## Architettura
ChatGPT coordina; Supabase AAC Core conserva prodotti, contatti, eventi di consenso, token, campagne, log e policy in schema privato. Gateway con privilegi limitati; Brevo simulato, Outlook per monitoraggio. Nessuna credenziale inclusa.

## Evidenze di collaudo
Le verifiche precedenti riportano RLS, isolamento, token monouso, revoca e blocco invio. Screenshot del 26 novembre: aac-brevo-simulator v0.1.0 HTTP 403, production_disabled, sent=false, external_request=false. aac-integration-test v0.2.1 HTTP 403, integration_probe_passed, compliance_checked=true, simulator_checked=true, sent=false. Il test senza header ha restituito authorization_header_missing. Questi risultati non dimostrano autorizzazione robusta del chiamante né consegna reale. Pulizia sintetica riportata: zero contatti, consensi, token, campagne e log; un prodotto. Inventario live non rieseguito per questo documento.

## Gate tecnici aperti
- Verificare autenticazione e autorizzazione specifica del chiamante, concorrenza token, integrità log e impossibilità di bypass operativo via Outlook.
- Ripetere test integrato con fixture sintetiche temporanee e cleanup verificato.
- Verificare dominio mittente, DKIM/DMARC, condizioni Brevo e gestione segreti prima di collegare API reali.
- Verificare CI e conservare evidenze riproducibili.

## Checklist legale preliminare (non parere legale)
- Identificare titolare, stato amministrativo e obblighi fiscali prima della vendita.
- Definire finalità, base giuridica per ogni trattamento e regole nazionali applicabili alle comunicazioni promozionali; verificare GDPR e art. 130 Codice Privacy per Italia.
- Verificare storico dei 70 invii e provenienza dei contatti; non importarli o ricontattarli senza valutazione documentata.
- Approvare informativa, raccolta consenso ove richiesto, prova, revoca, soppressione, conservazione e diritti interessati.
- Valutare accordi responsabili, subresponsabili, trasferimenti, sicurezza e incidenti per fornitori.
- Verificare condizioni di vendita, fatturazione e diritti consumatori ove applicabili.
- Ottenere revisione professionale e approvazione esplicita prima del rilascio.

## Vincoli
Nessun invio reale, nessuna importazione di contatti reali, nessuna spesa nuova autorizzata. Supabase e Brevo risultano su piani Free secondo verifiche precedenti. Nessuna modifica alla branch main. Prezzo prodotto da riconciliare prima della vendita.
