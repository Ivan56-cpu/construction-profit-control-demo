# WP06 L01 — Email marketing, analisi preliminare
26 novembre 2026. Non costituisce parere legale.

Fonti ufficiali consultate:
- GDPR artt. 6, 7, 21: https://eur-lex.europa.eu/legal-content/IT/TXT/?uri=CELEX%3A32016R0679
- Codice Privacy art. 130: https://www.garanteprivacy.it/documents/10160/0/Codice%2Bin%2Bmateria%2Bdi%2Bprotezione%2Bdei%2Bdati%2Bpersonali%2B%28Testo%2Bcoordinato%29.pdf/b1787d6b-6bce-07da-a38f-3742e3888c1d?version=14.0
- Garante, 20 ottobre 2026: https://garanteprivacy.it/web/guest/home/docweb/-/docweb-display/docweb/10313574
- Garante, 23 ottobre 2025: https://www.garanteprivacy.it/web/guest/home/docweb/-/docweb-display/docweb/10197577

## Risultati
La disponibilità pubblica di un indirizzo non autorizza il marketing. Il legittimo interesse non sostituisce il consenso richiesto dall'art. 130 per le email promozionali. L'eccezione soft spam è circoscritta a clienti e prodotti analoghi, con le ulteriori condizioni di legge. Non adottata nel prototipo AAC.

## Design proposto
Traffico inbound -> informativa e consenso marketing separato e facoltativo -> double opt-in senza promozioni -> prova documentata -> gateway fail-closed -> invio solo dopo approvazione della produzione. Revoca agevole e blocco ulteriori invii. Double opt-in è scelta tecnica, non obbligo generalizzato. Richieste di assistenza e demo separate dal marketing. Non usare messaggi promozionali non richiesti per ottenere il consenso.

## Gate aperti
L01: analisi preliminare documentata, approvazione professionale pendente. Definire titolare, testo informativa, conservazione, giurisdizione destinatari e verifica B2B. Audit dei 70 invii storici ancora aperto. Nessun ricontatto, importazione reale, invio o acquisto autorizzato. Nessuna modifica runtime.