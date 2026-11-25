import { eligible } from './consent-policy.mjs';
// Deliberately no network transport, credentials or send capability.
export function previewOutlookDispatch({recipient, record, policy} = {}) {
  if (typeof recipient !== 'string' || !recipient.trim() || record?.email !== recipient) return {status:'blocked',reason:'recipient mismatch'};
  if (!eligible(record,policy)) return {status:'blocked',reason:'consent or release gate failed'};
  return {status:'dry-run',reason:'technical checks passed; transport disabled'};
}
