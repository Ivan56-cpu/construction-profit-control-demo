-- Prototype only. Execute in private storage with synthetic data. Never commit database files.
PRAGMA foreign_keys = ON;
CREATE TABLE contacts (id TEXT PRIMARY KEY, email TEXT NOT NULL UNIQUE, suppressed INTEGER NOT NULL DEFAULT 1 CHECK(suppressed IN (0,1)));
CREATE TABLE consent_events (id TEXT PRIMARY KEY, contact_id TEXT NOT NULL REFERENCES contacts(id), purpose TEXT NOT NULL, event_type TEXT NOT NULL CHECK(event_type IN ('requested','confirmed','withdrawn')), occurred_at TEXT NOT NULL, notice_version TEXT NOT NULL, consent_version TEXT NOT NULL, evidence_id TEXT NOT NULL, source TEXT NOT NULL);
CREATE INDEX consent_history ON consent_events(contact_id,purpose,occurred_at);
-- A trusted service must authenticate requests, verify email ownership, and atomically record revocation and suppression. No sending directly from this schema.
-- Retention, encryption, backups, access control and deletion procedures require approval before deployment.
