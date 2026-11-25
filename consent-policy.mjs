// Prototype only. No persistence, network access or email sending.
export function eligible(record, policy) {
  if (policy?.productionApproved !== true || policy?.legalReviewApproved !== true) return false;
  if (!policy.noticeVersion || !policy.consentVersion || !policy.purpose) return false;
  if (!record || record.status !== 'confirmed' || record.withdrawnAt || record.suppressed !== false) return false;
  if (record.noticeVersion !== policy.noticeVersion || record.consentVersion !== policy.consentVersion || record.purpose !== policy.purpose) return false;
  const dates = [record.grantedAt, record.confirmedAt, record.validUntil].map(x => typeof x === 'string' ? Date.parse(x) : NaN);
  const now = Date.now();
  return dates.every(Number.isFinite) && dates[0] <= dates[1] && dates[1] <= now && now < dates[2] && typeof record.evidenceId === 'string' && record.evidenceId.trim().length > 0;
}
// Production must obtain trusted records and policy from private authenticated storage.
// A true result is only a technical eligibility check, not a legal determination.
