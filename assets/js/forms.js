/* =====================================================================
   MSM TV NEWS — contact/advertise form helpers (mailto, no backend)
   ===================================================================== */

function contactItem(icon, label, value) {
  return `<div class="contact-item"><span class="ic">${icon}</span><div><b>${label}</b>${value}</div></div>`;
}

function socialRow(b) {
  return `<div class="foot-social" style="margin-top:6px">
    <a href="#" title="Facebook">f</a>
    <a href="#" title="YouTube">▶</a>
    <a href="#" title="X">𝕏</a>
    <a href="#" title="Instagram">◎</a>
    <a href="https://wa.me/${b.phoneRaw}" title="WhatsApp">✆</a>
  </div>`;
}

function buildForm(formId, subjectDefault) {
  const form = document.getElementById(formId);
  if (!form) return;
  form.innerHTML = `
    <label>${t("form_name")}<input type="text" name="name" required></label>
    <label>${t("form_phone")}<input type="tel" name="phone"></label>
    <label>${t("form_email")}<input type="email" name="email"></label>
    <label>${t("form_subject")}<input type="text" name="subject" value="${subjectDefault}"></label>
    <label>${t("form_msg")}<textarea name="message" rows="5" required></textarea></label>
    <button type="submit" class="btn-gold">${t("form_send")}</button>
    <p class="form-note">${t("form_note")}</p>`;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const fd = new FormData(form);
    const name = fd.get("name") || "";
    const phone = fd.get("phone") || "";
    const email = fd.get("email") || "";
    const subject = fd.get("subject") || subjectDefault;
    const message = fd.get("message") || "";
    const body =
      `Name: ${name}\n` +
      `Phone: ${phone}\n` +
      `Email: ${email}\n\n` +
      `${message}\n\n— sent via MSM TV NEWS website`;
    const href = `mailto:${MSM.brand.email}?subject=${encodeURIComponent("[MSM TV NEWS] " + subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
  });
}
