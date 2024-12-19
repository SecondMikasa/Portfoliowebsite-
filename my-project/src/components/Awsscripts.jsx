import React, { useState, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FaCopy } from "react-icons/fa";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css"; // Syntax highlighting theme

const Awsscripts = () => {
  const [copiedCommand, setCopiedCommand] = useState(null);

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const handleCopy = (command) => {
    setCopiedCommand(command);
    setTimeout(() => setCopiedCommand(null), 2000);
  };

  const examples = [
    {
      title: "aws configure",
      description: "Sets up your AWS CLI configuration with your credentials and default region.",
      command: "aws configure",
      explanation: "Configures the AWS CLI with your access key, secret key, and default region.",
      requirements: "AWS CLI must be installed.",
      errorTip: "Ensure that your AWS credentials are correctly configured.",
    },
    {
      title: "aws s3 ls",
      description: "Lists all S3 buckets.",
      command: "aws s3 ls",
      explanation: "This command lists all S3 buckets in your AWS account.",
      requirements: "AWS CLI must be installed and configured.",
      errorTip: "If no buckets are listed, ensure that you have the proper permissions.",
    },
    {
      title: "aws ec2 describe-instances",
      description: "Describes instances in your EC2 environment.",
      command: "aws ec2 describe-instances",
      explanation: "This command provides details about your EC2 instances.",
      requirements: "AWS CLI must be installed and EC2 instances must be running.",
      errorTip: "Ensure you have the correct IAM permissions to describe EC2 instances.",
    },
    // Add more commands here as needed
  ];

  return (
    <div className="max-w-7xl mx-auto p-6 bg-black text-white font-mono">
      <section className="my-8">
        <h2 className="text-4xl font-bold text-yellow-500">AWS CLI Scripts</h2>
        <p className="mt-4 text-gray-400">Copy the commands below to automate your AWS tasks.</p>
      </section>

      <div className="space-y-6">
        {examples.map((example, index) => (
          <div key={index} className="space-y-4">
            <h3 className="text-2xl font-semibold text-yellow-400">{example.title}</h3>
            <p className="text-gray-500">{example.description}</p>

            {/* Copy Button */}
            <CopyToClipboard text={example.command}>
              <button
                onClick={() => handleCopy(example.command)}
                className="text-yellow-400 border-2 border-yellow-400 py-2 px-4 rounded-md hover:bg-yellow-400 hover:text-black focus:outline-none transition-all duration-300 flex items-center"
              >
                <FaCopy className="mr-2" />
                Copy Command
              </button>
            </CopyToClipboard>

            {copiedCommand === example.command && (
              <span className="text-yellow-500">Command copied!</span>
            )}

            {/* Command Display */}
            <div className="text-yellow-400 mt-2">
              <pre className="bg-gray-800 p-4 rounded-lg overflow-x-auto">
                <code className="language-bash">{example.command}</code>
              </pre>
            </div>

            <p className="text-gray-500">
              <strong>Explanation:</strong> {example.explanation}
            </p>
            <p className="text-gray-500">
              <strong>Requirements:</strong> {example.requirements}
            </p>
            <p className="text-gray-500">
              <strong>Error Tip:</strong> {example.errorTip}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Awsscripts;
