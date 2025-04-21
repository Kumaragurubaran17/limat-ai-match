
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const Terms = () => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-8 text-center">Terms of Service</h1>
      
      <Card className="p-6">
        <CardContent className="p-0 space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-4">Agreement to Terms</h2>
            <p className="mb-4">
              These Terms of Service constitute a legally binding agreement between you and LIMAT regarding your use of our AI recruitment platform and services.
            </p>
            <p>
              By accessing or using our platform, you agree to be bound by these Terms. If you disagree with any part of the Terms, you may not access the platform.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-4">Description of Services</h2>
            <p className="mb-4">
              LIMAT provides an AI-powered recruitment platform that includes resume screening, automated interviewing, skill assessment, and decision support tools. Our services are designed to assist in the recruitment process but are not intended to replace human judgment or decision-making entirely.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-4">User Accounts</h2>
            <p className="mb-4">
              To access certain features of the platform, you must register for an account. You must provide accurate, current, and complete information during the registration process and keep your account information up-to-date.
            </p>
            <p className="mb-4">
              You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
            </p>
            <p>
              We reserve the right to terminate or suspend your account at our sole discretion, without notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties, or for any other reason.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-4">User Content</h2>
            <p className="mb-4">
              Our platform allows you to upload, submit, store, send, or receive content, including but not limited to resumes, application materials, and interview responses ("User Content").
            </p>
            <p className="mb-4">
              You retain ownership of any intellectual property rights that you hold in your User Content. By uploading or submitting User Content, you grant LIMAT a worldwide, royalty-free license to use, reproduce, modify, adapt, publish, translate, and distribute your User Content for the purpose of providing and improving our services.
            </p>
            <p>
              You represent and warrant that you own or have the necessary rights to your User Content and that it does not violate any third party's intellectual property or other rights.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-4">Prohibited Activities</h2>
            <p className="mb-4">
              You agree not to engage in any of the following prohibited activities:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Using the platform for any illegal purpose or in violation of any laws</li>
              <li>Violating the intellectual property rights of others</li>
              <li>Attempting to interfere with or disrupt the platform or its servers</li>
              <li>Impersonating another person or entity</li>
              <li>Uploading false, misleading, or fraudulent User Content</li>
              <li>Attempting to reverse engineer, decompile, or disassemble any portion of the platform</li>
              <li>Using automated methods to access or use the platform without our permission</li>
              <li>Transmitting any viruses, malware, or other harmful code</li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-4">Intellectual Property</h2>
            <p className="mb-4">
              The platform and its original content, features, and functionality are owned by LIMAT and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
            </p>
            <p>
              You may not modify, reproduce, distribute, create derivative works or adaptations of, publicly display or in any way exploit the platform in whole or in part except as expressly authorized by us.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-4">Disclaimer of Warranties</h2>
            <p className="mb-4">
              The platform is provided on an "as is" and "as available" basis without any warranties, expressed or implied. LIMAT disclaims all warranties of any kind, whether express or implied, including but not limited to the implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
            </p>
            <p>
              We do not guarantee that the platform will be uninterrupted, timely, secure, or error-free, or that any defects will be corrected.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, LIMAT shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or other intangible losses, resulting from your access to or use of or inability to access or use the platform.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-4">Indemnification</h2>
            <p>
              You agree to defend, indemnify, and hold harmless LIMAT and its officers, directors, employees, and agents from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your violation of these Terms or your use of the platform.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-4">Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of [Jurisdiction], without regard to its conflict of law provisions.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-4">Changes to Terms</h2>
            <p>
              We may revise these Terms at any time without notice. By using this platform, you are agreeing to be bound by the current version of these Terms.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at terms@limat.ai.
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

export default Terms;
