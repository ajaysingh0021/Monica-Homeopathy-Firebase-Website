import type { Metadata } from 'next';
import { SITE_TITLE } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Privacy Policy | ${SITE_TITLE}`,
  description: `Privacy Policy for ${SITE_TITLE}. Learn how we collect, use, and protect your personal information.`,
  robots: { index: false, follow: false }, // Usually noindex for legal pages unless specific SEO strategy
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 max-w-3xl">
      <header className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
      </header>

      <div className="prose prose-lg max-w-none text-foreground">
        <p>Welcome to {SITE_TITLE}. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice or our practices with regard to your personal information, please contact us at [Your Contact Email/Info].</p>

        <p>This privacy notice describes how we might use your information if you:</p>
        <ul>
          <li>Visit our website at [Your Website URL, e.g., drmonicahomeopathy.com]</li>
          <li>Engage with us in other related ways, including any sales, marketing, or events</li>
        </ul>
        <p>In this privacy notice, if we refer to:</p>
        <ul>
          <li><strong>"Website,"</strong> we are referring to any website of ours that references or links to this policy</li>
          <li><strong>"Services,"</strong> we are referring to our Website, and other related services, including any sales, marketing, or events</li>
        </ul>
        <p>The purpose of this privacy notice is to explain to you in the clearest way possible what information we collect, how we use it, and what rights you have in relation to it. If there are any terms in this privacy notice that you do not agree with, please discontinue use of our Services immediately.</p>

        <h2 className="mt-8 text-2xl font-semibold">1. WHAT INFORMATION DO WE COLLECT?</h2>
        <p><strong>Personal information you disclose to us</strong></p>
        <p><em>In Short: We collect personal information that you provide to us.</em></p>
        <p>We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services, when you participate in activities on the Website (such as posting messages in our online forums or entering competitions, contests or giveaways) or otherwise when you contact us.</p>
        <p>The personal information that we collect depends on the context of your interactions with us and the Website, the choices you make and the products and features you use. The personal information we collect may include the following: names; phone numbers; email addresses; mailing addresses; contact preferences; billing addresses; and other similar information.</p>
        
        <h2 className="mt-8 text-2xl font-semibold">2. HOW DO WE USE YOUR INFORMATION?</h2>
        <p><em>In Short: We process your information for purposes based on legitimate business interests, the fulfillment of our contract with you, compliance with our legal obligations, and/or your consent.</em></p>
        <p>[Detail how you use the information - e.g., to provide services, send administrative info, marketing, etc.]</p>

        <h2 className="mt-8 text-2xl font-semibold">3. WILL YOUR INFORMATION BE SHARED WITH ANYONE?</h2>
        <p><em>In Short: We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.</em></p>
        <p>[Detail sharing practices - e.g., third-party vendors, legal requirements, business transfers.]</p>
        
        <h2 className="mt-8 text-2xl font-semibold">4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</h2>
        <p><em>In Short: We may use cookies and other tracking technologies to collect and store your information.</em></p>
        <p>[Provide details about cookie usage. You can refer to a separate Cookie Policy if extensive.]</p>

        <h2 className="mt-8 text-2xl font-semibold">5. HOW LONG DO WE KEEP YOUR INFORMATION?</h2>
        <p><em>In Short: We keep your information for as long as necessary to fulfill the purposes outlined in this privacy notice unless otherwise required by law.</em></p>
        <p>[Explain data retention periods.]</p>

        <h2 className="mt-8 text-2xl font-semibold">6. HOW DO WE KEEP YOUR INFORMATION SAFE?</h2>
        <p><em>In Short: We aim to protect your personal information through a system of organizational and technical security measures.</em></p>
        <p>[Describe security measures. Acknowledge that no system is 100% secure.]</p>

        <h2 className="mt-8 text-2xl font-semibold">7. WHAT ARE YOUR PRIVACY RIGHTS?</h2>
        <p><em>In Short: In some regions, such as the European Economic Area (EEA), United Kingdom (UK), and Canada, you have rights that allow you greater access to and control over your personal information. You may review, change, or terminate your account at any time.</em></p>
        <p>[Detail rights like access, rectification, erasure, GDPR, CCPA rights if applicable.]</p>
        
        <h2 className="mt-8 text-2xl font-semibold">8. CONTROLS FOR DO-NOT-TRACK FEATURES</h2>
        <p>Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this privacy notice.</p>

        <h2 className="mt-8 text-2xl font-semibold">9. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</h2>
        <p><em>In Short: Yes, if you are a resident of California, you are granted specific rights regarding access to your personal information.</em></p>
        <p>[Include CCPA specific details if applicable.]</p>
        
        <h2 className="mt-8 text-2xl font-semibold">10. DO WE MAKE UPDATES TO THIS NOTICE?</h2>
        <p><em>In Short: Yes, we will update this notice as necessary to stay compliant with relevant laws.</em></p>
        <p>We may update this privacy notice from time to time. The updated version will be indicated by an updated "Revised" date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy notice frequently to be informed of how we are protecting your information.</p>

        <h2 className="mt-8 text-2xl font-semibold">11. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</h2>
        <p>If you have questions or comments about this notice, you may email us at [Your Contact Email] or by post to:</p>
        <p>[Your Business Name]</p>
        <p>[Your Business Address]</p>
        
        <p className="mt-6"><em>This is a template Privacy Policy and should be reviewed and customized by a legal professional to ensure it meets all applicable legal requirements for your specific business and jurisdictions.</em></p>
      </div>
    </div>
  );
}
