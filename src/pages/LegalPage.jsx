import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

const TERMS_OF_SERVICE = {
  title: 'Terms of Service',
  lastUpdated: 'Draft',
  sections: [
    {
      heading: '1. Introduction',
      body: 'Welcome to Payvol. These Terms of Service ("Terms") govern your use of the Payvol mobile application, website, and services ("Services"). By accessing or using Payvol, you agree to these Terms.',
    },
    {
      heading: '2. Eligibility',
      body: 'To use Payvol, you must:',
      bullets: [
        'Be at least 18 years old (or have parental/guardian consent)',
        'Provide accurate and complete information',
        'Comply with all applicable laws and regulations',
      ],
    },
    {
      heading: '3. Account Registration',
      bullets: [
        'Users must create an account using valid personal details',
        'You are responsible for maintaining the confidentiality of your account',
        'Payvol may suspend or terminate accounts for suspicious or fraudulent activity',
      ],
    },
    {
      heading: '4. Services Provided',
      body: 'Payvol provides:',
      bullets: [
        'Money transfers (send & receive)',
        'Virtual and physical card services',
        'Financial insights and scoring tools',
        'Crypto wallet linking and conversion services',
        'Family/child account management',
      ],
    },
    {
      heading: '5. Payments & Transactions',
      bullets: [
        'All transactions must be authorized by the user',
        'Payvol is not responsible for errors caused by incorrect recipient details',
        'Transactions may be subject to limits and verification checks',
      ],
    },
    {
      heading: '6. Crypto Services',
      bullets: [
        'Users may link external crypto wallets',
        'Crypto deposits may be converted to fiat currency',
        'Conversion rates are subject to market conditions and fees',
        'Payvol does not guarantee value stability of crypto assets',
      ],
    },
    {
      heading: '7. Cards',
      bullets: [
        'Payvol may issue virtual and physical cards',
        'Users must safeguard card details',
        'Lost or stolen cards must be reported immediately',
        'Card usage may be subject to limits and restrictions',
      ],
    },
    {
      heading: '8. Family & Child Accounts',
      bullets: [
        'Parents/guardians are responsible for child accounts',
        'Spending limits and controls are managed by the parent account',
        'Payvol is not liable for misuse by authorized child users',
      ],
    },
    {
      heading: '9. Fees',
      body: 'Payvol may charge:',
      bullets: [
        'Transaction fees',
        'Card issuance fees',
        'Currency conversion fees',
        'Crypto conversion margins',
      ],
      footer: 'All fees will be disclosed within the app.',
    },
    {
      heading: '10. Financial Score Disclaimer',
      bullets: [
        'Payvol provides a financial score for informational purposes only',
        'It does not represent a formal credit score from a licensed credit bureau',
        'It should not be used as the sole basis for financial decisions',
      ],
    },
    {
      heading: '11. Security',
      bullets: [
        'Payvol uses industry-standard security measures',
        'Users must keep login credentials secure',
        'Payvol is not liable for losses due to user negligence',
      ],
    },
    {
      heading: '12. Compliance & KYC',
      bullets: [
        'Users may be required to complete identity verification (KYC)',
        'Payvol complies with applicable financial regulations',
        'Accounts may be restricted for compliance reasons',
      ],
    },
    {
      heading: '13. Prohibited Activities',
      body: 'Users may not:',
      bullets: [
        'Engage in fraud or illegal activities',
        'Use Payvol for money laundering',
        'Provide false information',
        'Attempt to hack or disrupt the system',
      ],
    },
    {
      heading: '14. Suspension & Termination',
      body: 'Payvol may suspend or terminate accounts if:',
      bullets: [
        'Terms are violated',
        'Fraudulent activity is detected',
        'Required by law or regulators',
      ],
    },
    {
      heading: '15. Limitation of Liability',
      body: 'Payvol is not liable for:',
      bullets: [
        'Indirect or consequential losses',
        'Losses due to third-party services',
        'Market losses from crypto volatility',
      ],
    },
    {
      heading: '16. Changes to Terms',
      body: 'Payvol may update these Terms at any time. Continued use of the platform constitutes acceptance of updates.',
    },
    {
      heading: '17. Governing Law',
      body: 'These Terms are governed by the laws of Ghana.',
    },
    {
      heading: '18. Contact',
      body: 'For support or inquiries: support@payvol.com',
    },
  ],
}

const PRIVACY_POLICY = {
  title: 'Privacy Policy',
  lastUpdated: 'Draft',
  sections: [
    {
      heading: '1. Introduction',
      body: 'Payvol ("we", "our", "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, store, and protect your personal information when you use our app, website, and services. By using Payvol, you agree to this policy.',
    },
    {
      heading: '2. Information We Collect',
      subsections: [
        {
          label: 'Personal Information',
          bullets: ['Full name', 'Email address', 'Phone number', 'Date of birth', 'Identification documents (for KYC)'],
        },
        {
          label: 'Financial Information',
          bullets: ['Transaction history', 'Wallet balances', 'Linked bank accounts', 'Card details (secured via partners)'],
        },
        {
          label: 'Crypto Information',
          bullets: ['Linked wallet addresses', 'Transaction records related to crypto deposits'],
        },
        {
          label: 'Device & Usage Data',
          bullets: ['IP address', 'Device type', 'App usage behavior', 'Log data'],
        },
      ],
    },
    {
      heading: '3. How We Use Your Information',
      body: 'We use your data to:',
      bullets: [
        'Provide and operate Payvol services',
        'Process transactions',
        'Verify your identity (KYC/AML compliance)',
        'Improve user experience',
        'Generate financial insights and scoring',
        'Communicate updates and support',
      ],
    },
    {
      heading: '4. Sharing of Information',
      body: 'We do not sell your personal data. We may share data with:',
      bullets: [
        'Payment processors and banking partners',
        'Crypto service providers',
        'Regulatory authorities (when required by law)',
        'Service providers (hosting, analytics, communication tools)',
      ],
    },
    {
      heading: '5. Data Security',
      body: 'We implement strong security measures including:',
      bullets: [
        'Encryption of sensitive data',
        'Secure servers and infrastructure',
        'Access controls and authentication',
      ],
      footer: 'However, no system is 100% secure.',
    },
    {
      heading: '6. Data Retention',
      body: 'We retain your data:',
      bullets: [
        'As long as your account is active',
        'As required by financial regulations',
        'For fraud prevention and legal compliance',
      ],
    },
    {
      heading: '7. Your Rights',
      body: 'You have the right to:',
      bullets: [
        'Access your personal data',
        'Correct inaccurate information',
        'Request deletion (subject to legal requirements)',
        'Withdraw consent (where applicable)',
      ],
    },
    {
      heading: '8. Cookies & Tracking',
      body: 'Payvol may use cookies and similar technologies to:',
      bullets: ['Improve functionality', 'Analyze usage', 'Personalize user experience'],
    },
    {
      heading: "9. Children's Privacy (Family Accounts)",
      bullets: [
        'Child accounts are managed by parents/guardians',
        'We only collect necessary data for functionality',
        'Parents control and oversee child account activity',
      ],
    },
    {
      heading: '10. Third-Party Services',
      body: 'Payvol may integrate with third-party services (banks, crypto providers). Their privacy policies may also apply.',
    },
    {
      heading: '11. International Data Transfers',
      body: 'Your data may be stored or processed outside your country, subject to appropriate safeguards.',
    },
    {
      heading: '12. Changes to This Policy',
      body: 'We may update this Privacy Policy from time to time. Updates will be communicated through the app or website.',
    },
    {
      heading: '13. Contact Us',
      body: 'For any privacy-related questions: support@payvol.com',
    },
  ],
}

const COOKIE_POLICY = {
  title: 'Cookie Policy',
  lastUpdated: 'Draft',
  sections: [
    {
      heading: '1. Introduction',
      body: 'This Cookie Policy explains how Payvol ("we", "our", "us") uses cookies and similar technologies when you visit our website or use our services. By continuing to use Payvol, you agree to our use of cookies as described in this policy.',
    },
    {
      heading: '2. What Are Cookies?',
      body: 'Cookies are small text files stored on your device (computer, phone, tablet) when you visit a website. They help improve functionality, security, and user experience.',
    },
    {
      heading: '3. Types of Cookies We Use',
      subsections: [
        {
          label: 'Essential Cookies (Required)',
          body: 'These cookies are necessary for the platform to function. Used for:',
          bullets: ['User authentication (login sessions)', 'Security and fraud prevention', 'Basic site functionality'],
        },
        {
          label: 'Performance & Analytics Cookies',
          body: 'These help us understand how users interact with Payvol. Used for:',
          bullets: ['Tracking website/app usage', 'Measuring performance', 'Improving features'],
        },
        {
          label: 'Functional Cookies',
          body: 'These enhance your experience. Used for:',
          bullets: ['Remembering preferences', 'Saving settings', 'Personalizing content'],
        },
        {
          label: 'Marketing Cookies (Optional)',
          body: 'These track user activity to deliver relevant ads. Used for:',
          bullets: ['Advertising campaigns', 'Retargeting users'],
        },
      ],
    },
    {
      heading: '4. How We Use Cookies',
      body: 'We use cookies to:',
      bullets: [
        'Keep you logged in',
        'Secure your account',
        'Improve app performance',
        'Understand user behavior',
        'Enhance user experience',
      ],
    },
    {
      heading: '5. Managing Cookies',
      body: 'You can control or disable cookies through your browser settings. However:',
      bullets: [
        'Disabling essential cookies may affect functionality',
        'Some features may not work properly',
      ],
    },
    {
      heading: '6. Third-Party Cookies',
      body: 'We may allow trusted third-party services to place cookies, including:',
      bullets: ['Analytics providers', 'Payment processors', 'Security services'],
      footer: 'These third parties have their own privacy policies.',
    },
    {
      heading: '7. Updates to This Policy',
      body: 'We may update this Cookie Policy from time to time. Changes will be posted on this page.',
    },
    {
      heading: '8. Contact Us',
      body: 'For questions about this policy: support@payvol.com',
    },
  ],
}

const SLUG_MAP = {
  terms: TERMS_OF_SERVICE,
  privacy: PRIVACY_POLICY,
  cookies: COOKIE_POLICY,
}

function Section({ section }) {
  return (
    <div className="mb-8">
      <h2 className="text-lg font-bold text-gray-900 mb-3 pb-2 border-b border-gray-100">{section.heading}</h2>
      {section.body && <p className="text-gray-600 leading-relaxed mb-3">{section.body}</p>}
      {section.subsections && section.subsections.map((sub, i) => (
        <div key={i} className="mb-4 pl-4 border-l-2 border-blue-100">
          <p className="text-sm font-semibold text-gray-800 mb-1">{sub.label}</p>
          {sub.body && <p className="text-sm text-gray-600 leading-relaxed mb-2">{sub.body}</p>}
          <ul className="space-y-1">
            {sub.bullets.map((b, j) => (
              <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                {b}
              </li>
            ))}
          </ul>
        </div>
      ))}
      {section.bullets && (
        <ul className="space-y-2 mb-3">
          {section.bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-2 text-gray-600">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
              <span className="text-sm leading-relaxed">{b}</span>
            </li>
          ))}
        </ul>
      )}
      {section.footer && <p className="text-sm text-gray-500 italic mt-2">{section.footer}</p>}
    </div>
  )
}

export default function LegalPage() {
  const { slug } = useParams()
  const doc = SLUG_MAP[slug]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!doc) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-500 mb-4">Document not found.</p>
          <Link to="/" className="text-blue-600 hover:underline">← Back to Home</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-[#011c61] py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <div className="flex items-center gap-3 mb-2">
            <img src="/assets/images/PV-logo.png" alt="PayVol" className="h-24 brightness-0 invert" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mt-4">{doc.title}</h1>
          <p className="text-white/50 text-sm mt-2">Status: {doc.lastUpdated}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-3xl py-12">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 px-6 md:px-10 py-8">
          {doc.sections.map((section, i) => (
            <Section key={i} section={section} />
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
