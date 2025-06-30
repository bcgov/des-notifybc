# NOTIFY MONTHLY MAINTENANCE REPORT - June 20, 2025

**JIRA Ticket:** [NOTIFY-117](https://citz-gdx.atlassian.net/browse/NOTIFY-117)
**Maintenance Period:** June 30, 2025 - July 30, 2025
**Completed By:** Richard OBrien
**Completion Date:** July 30, 2025

---

## 1. Dependabot and Renovate Review

### Dependabot PRs - Merged ✅

| PR # | Title | Type | Notes |
|------|-------|------|-------|
| #113 | [Bump multer and @nestjs/platform-express](https://github.com/bcgov/des-notifybc/pull/113) | Security/Dependency | version update |
| #XXX | [PR Title](link) | Formidable relies on hexoid to prevent guessing of filenames for untrusted executable content | Dependabot cannot update formidable to a non-vulnerable version |
| #107 | [PR Title](link) | Security/Dependency | [Brief description] |

**Total Merged:** X PRs

### Dependabot PRs - Manual Intervention Required ⚠️

| PR # | Title | Issue | Action Taken |
|------|-------|-------|--------------|
| #XXX | [PR Title](link) | [Error description] | [New ticket created: NOTIFY-XXX] |
| #XXX | [PR Title](link) | [Error description] | [Manual code changes required] |

### Dependabot PRs - Non-Resolvable ❌

| Alert # | Title | Reason | Status |
|---------|-------|--------|--------|
| #115 | [brace-expansion Regular Expression Denial of Service vulnerability](https://github.com/bcgov/des-notifybc/security/dependabot/115) | Dependabot cannot update brace-expansion to a non-vulnerable version| Monitoring |
| #XXX | [PR Title](link) | Formidable relies on hexoid to prevent guessing of filenames for untrusted executable content | Dependabot cannot update formidable to a non-vulnerable version |
| #XXX | [Alert Title](link) | No patched version available | Monitoring |
| #XXX | [Alert Title](link) | Breaking changes | Dismissed - not applicable |

### Renovate PRs

| PR # | Title | Status | Action |
|------|-------|--------|--------|
| #XXX | [PR Title](link) | ✅ Approved | All checks passed |
| #XXX | [PR Title](link) | ⚠️ Flagged | [Reason] - Product owner notified |

**Dependabot Dashboard:** <https://github.com/bcgov/des-notifybc/security/dependabot>

---

## 2. OWASP ZAP Scan Results

### Scan Details

- **Automatic Scan Date:** [DATE]
- **API Scan Date:** [DATE]
- **Target URLs:**
  - [Production URL]
  - [API Endpoints]

### High-Risk Alerts Found

| Alert | Risk Level | Description | Recommendation |
|-------|------------|-------------|----------------|
| [Alert Name] | High | [Description] | [Action required] |

#### OR

✅ **No high-risk alerts found**

### Medium/Low Risk Summary

- Medium Risk Alerts: X
- Low Risk Alerts: X
- Informational: X

**Reports Attached:**

- [OWASP_ZAP_Automatic_Scan_[DATE].html](attachment)
- [OWASP_ZAP_API_Scan_[DATE].html](attachment)

---

## 3. Backup and Restore Verification

### des-notifybc-prod
- **Backup Date:** [DATE]
- **Restore Test Date:** [DATE]
- **Status:** ✅ Success / ❌ Failed
- **Notes:** [Any issues or observations]

### emcr-notifybc-prod
- **Backup Date:** [DATE]
- **Restore Test Date:** [DATE]
- **Status:** ✅ Success / ❌ Failed
- **Notes:** [Any issues or observations]

**Reference:** [Backup and Restore Instructions](https://citz-gdx.atlassian.net/wiki/x/GYGtCQ)

---

## 4. Sysdig Alerts Review

### Unresolved Alerts Since Last Maintenance

| Alert ID | Severity | Description | Action Taken | Status |
|----------|----------|-------------|--------------|--------|
| [Alert ID] | Critical/High/Medium | [Description] | [Action description] | Resolved/Monitoring |

**OR**

✅ **No unresolved alerts found**

### Severe Alerts Summary
- Critical: X alerts
- High: X alerts
- Medium: X alerts

**Sysdig Interface:** [Login instructions as per documentation](https://bitbucket.org/bc-gov/documentation/src/master/PlayBooks/Sysdig-Alerts/)

---

## 5. Inventory Updates

### Changes Made This Period

| Component | Previous Version | New Version | Change Type |
|-----------|------------------|-------------|-------------|
| [Software/Host] | [Version] | [Version] | Update/New/Removed |

**OR**

✅ **No inventory changes required - all items up to date**

### Current Inventory Status
- Hosts: [Status]
- Platform: [Status]
- Stack: [Status]
- Software Versions: [Status]
- Licenses: [Status]

---

## 6. Linked Issues Review

### Issues Addressed
- [NOTIFY-XXX]: [Description of action taken]
- [NOTIFY-XXX]: [Description of action taken]

**OR**

✅ **No linked issues requiring action**

---

## Summary

### Completion Status
- [x] Dependabot/Renovate Review Complete
- [x] OWASP ZAP Scans Complete
- [x] Backup/Restore Verification Complete
- [x] Sysdig Alerts Reviewed
- [x] Inventory Updated
- [x] Linked Issues Reviewed

### Key Metrics
- **Total PRs Merged:** X
- **Security Alerts Resolved:** X
- **High-Risk Issues Found:** X
- **Systems Verified:** 2/2

### Next Steps
- [ ] Clone ticket for next maintenance cycle (due ~[NEXT DATE])
- [ ] Ensure new ticket is assigned to NOTIFY project
- [ ] Monitor any flagged issues with product owner
- [ ] [Any specific follow-up actions]

---

## Attachments
- OWASP ZAP Automatic Scan Report
- OWASP ZAP API Scan Report
- [Any additional documentation]

---

## References
- **Dependabot Alerts:** https://github.com/bcgov/des-notifybc/security/dependabot
- **OWASP ZAP Instructions:** https://bitbucket.org/bc-gov/documentation/src/master/PlayBooks/OWASP-ZAP/
- **Backup Instructions:** https://citz-gdx.atlassian.net/wiki/x/GYGtCQ
- **Sysdig Documentation:** https://bitbucket.org/bc-gov/documentation/src/master/PlayBooks/Sysdig-Alerts/
- **Repository:** https://github.com/bcgov/des-notifybc
