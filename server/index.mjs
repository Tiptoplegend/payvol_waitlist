import "dotenv/config";
import express from "express";
import { Resend } from "resend";

const app = express();
app.use(express.json());

// ── Resend setup ───────────────────────────────────────────────────────
const resendApiKey = process.env.RESEND_API_KEY;
const fromEmail =
  process.env.WAITLIST_FROM_EMAIL || "Payvol <onboarding@resend.dev>";

if (!resendApiKey) {
  console.warn(
    "⚠️  RESEND_API_KEY is not set – emails will NOT be sent. Add it to .env"
  );
}

const resend = resendApiKey ? new Resend(resendApiKey) : null;

// ── Welcome email endpoint ─────────────────────────────────────────────
app.post("/api/send-welcome", async (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: "name and email are required" });
  }

  if (!resend) {
    console.log(`📧 [dry-run] Would send welcome email to ${email}`);
    return res.json({ success: true, dryRun: true });
  }

  const firstName = name.split(" ")[0];

  try {
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: email,
      subject: "Welcome to Payvol – You're on the list! 🎉",
      html: buildWelcomeHtml(firstName),
    });

    if (error) {
      console.error("Resend error:", error);
      return res.status(502).json({ error: "Failed to send email" });
    }

    console.log(`✅ Welcome email sent to ${email} (id: ${data?.id})`);
    return res.json({ success: true, emailId: data?.id });
  } catch (err) {
    console.error("Email send error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
});

// ── Health check ────────────────────────────────────────────────────────
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok" });
});

// ── Start server ────────────────────────────────────────────────────────
const PORT = process.env.WAITLIST_SERVER_PORT || 8787;
app.listen(PORT, () => {
  console.log(`Waitlist API running on http://localhost:${PORT}`);
});

// ── Email template ──────────────────────────────────────────────────────
function buildWelcomeHtml(firstName) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Welcome to Payvol</title>
</head>
<body style="margin:0; padding:0; background-color:#0a0a0a; font-family:'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#0a0a0a;">
    <tr>
      <td align="center" style="padding:40px 20px;">
        <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="max-width:560px; width:100%;">

          <!-- Logo -->
          <tr>
            <td align="center" style="padding-bottom:32px;">
              <span style="font-size:28px; font-weight:700; color:#ffffff; letter-spacing:-0.5px;">
                ⚡ Payvol
              </span>
            </td>
          </tr>

          <!-- Card -->
          <tr>
            <td style="background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); border-radius:16px; padding:40px 36px; border:1px solid rgba(255,255,255,0.08);">
              
              <!-- Greeting -->
              <p style="margin:0 0 8px; font-size:24px; font-weight:700; color:#ffffff;">
                Hey ${firstName}! 👋
              </p>
              <p style="margin:0 0 24px; font-size:16px; line-height:1.6; color:#a0a0b8;">
                You're officially on the Payvol waitlist. We're thrilled to have you on board.
              </p>

              <!-- Divider -->
              <div style="height:1px; background:linear-gradient(90deg, transparent, rgba(168,85,247,0.4), transparent); margin:24px 0;"></div>

              <!-- What's coming -->
              <p style="margin:0 0 16px; font-size:18px; font-weight:600; color:#ffffff;">
                What to expect
              </p>
              <table role="presentation" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
                <tr>
                  <td style="padding:6px 12px 6px 0; color:#a855f7; font-size:18px; vertical-align:top;">🚀</td>
                  <td style="padding:6px 0; font-size:15px; line-height:1.5; color:#c0c0d0;">
                    <strong style="color:#ffffff;">Early access</strong> — Be among the first to experience Payvol when we launch.
                  </td>
                </tr>
                <tr>
                  <td style="padding:6px 12px 6px 0; color:#a855f7; font-size:18px; vertical-align:top;">📬</td>
                  <td style="padding:6px 0; font-size:15px; line-height:1.5; color:#c0c0d0;">
                    <strong style="color:#ffffff;">Exclusive updates</strong> — Product sneak peeks, behind-the-scenes content, and launch dates.
                  </td>
                </tr>
                <tr>
                  <td style="padding:6px 12px 6px 0; color:#a855f7; font-size:18px; vertical-align:top;">🎁</td>
                  <td style="padding:6px 0; font-size:15px; line-height:1.5; color:#c0c0d0;">
                    <strong style="color:#ffffff;">Special perks</strong> — Waitlist members get rewards you won't find anywhere else.
                  </td>
                </tr>
              </table>

              <!-- CTA -->
              <p style="margin:0 0 24px; font-size:15px; line-height:1.6; color:#a0a0b8;">
                Stay tuned — big things are coming. We'll keep you in the loop every step of the way.
              </p>

              <!-- Divider -->
              <div style="height:1px; background:linear-gradient(90deg, transparent, rgba(59,130,246,0.4), transparent); margin:24px 0;"></div>

              <!-- Social -->
              <p style="margin:0; font-size:14px; color:#707088; text-align:center;">
                Follow us for the latest —
                <a href="https://x.com/PayVol" style="color:#a855f7; text-decoration:none;">X (Twitter)</a> ·
                <a href="https://www.instagram.com/payvolhq" style="color:#a855f7; text-decoration:none;">Instagram</a> ·
                <a href="https://www.tiktok.com/@payvolhq" style="color:#a855f7; text-decoration:none;">TikTok</a>
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td align="center" style="padding:32px 0 0;">
              <p style="margin:0; font-size:13px; color:#505068;">
                © ${new Date().getFullYear()} Payvol. All rights reserved.
              </p>
              <p style="margin:8px 0 0; font-size:12px; color:#404058;">
                Payments that build your financial future.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
