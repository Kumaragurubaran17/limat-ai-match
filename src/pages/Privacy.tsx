
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const Privacy = () => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-8 text-center">Privacy Policy</h1>
      
      <Card className="p-6">
        <CardContent className="p-0 space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
            <p className="mb-4">
              LIMAT ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI recruitment platform.
            </p>
            <p>
              Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the platform.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
            <h3 className="text-xl font-semibold mb-2">Personal Information</h3>
            <p className="mb-4">
              We may collect personal information that you voluntarily provide to us when you register with the platform, express interest in obtaining information about us or our products, or otherwise contact us. The personal information we collect may include:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Name, email address, and contact information</li>
              <li>Employment history, educational background, and qualifications</li>
              <li>Resume, CV, and other application documents</li>
              <li>Interview responses and assessment results</li>
              <li>Account credentials</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-2">Derivative Data</h3>
            <p>
              Our servers automatically collect information when you access our platform, such as your IP address, browser type, operating system, access times, and the pages you have viewed.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
            <p className="mb-4">We may use the information we collect for various purposes, including:</p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Facilitating the recruitment process and candidate assessment</li>
              <li>Creating and maintaining your account</li>
              <li>Providing you with support and responding to inquiries</li>
              <li>Improving our platform and user experience</li>
              <li>Analyzing usage patterns and trends</li>
              <li>Sending administrative information and updates</li>
              <li>Preventing fraudulent activity and enhancing security</li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-4">Disclosure of Your Information</h2>
            <p className="mb-4">
              We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
            </p>
            <h3 className="text-xl font-semibold mb-2">Recruiters and Employers</h3>
            <p className="mb-4">
              If you are a candidate, your information will be shared with recruiters and employers who use our platform to evaluate your suitability for job positions.
            </p>
            
            <h3 className="text-xl font-semibold mb-2">Service Providers</h3>
            <p className="mb-4">
              We may share your information with third-party service providers who perform services on our behalf, such as hosting, data analysis, and customer service.
            </p>
            
            <h3 className="text-xl font-semibold mb-2">Legal Requirements</h3>
            <p>
              We may disclose your information where required by law or if we believe that disclosure is necessary to protect our rights or comply with a judicial proceeding, court order, or legal process.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-4">Data Security</h2>
            <p className="mb-4">
              We use administrative, technical, and physical security measures to protect your personal information. While we have taken reasonable steps to secure the information you provide to us, please be aware that no security measures are perfect or impenetrable, and we cannot guarantee the security of your information.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
            <p className="mb-4">
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>The right to access the personal information we have about you</li>
              <li>The right to rectify inaccurate or incomplete information</li>
              <li>The right to request deletion of your personal information</li>
              <li>The right to restrict or object to our processing of your information</li>
              <li>The right to data portability</li>
            </ul>
            <p>
              To exercise these rights, please contact us using the information provided in the "Contact Us" section below.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-4">Policy Updates</h2>
            <p>
              We may update this privacy policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new privacy policy on this page and updating the "Last Updated" date at the top of this page.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p>
              If you have questions or concerns about this privacy policy or our practices, please contact us at privacy@limat.ai.
            </p>
          </div>
          
          <div className="text-sm text-muted-foreground">
            Last Updated: April 21, 2025
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Privacy;
