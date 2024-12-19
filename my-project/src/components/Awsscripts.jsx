
import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FaCopy } from 'react-icons/fa';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css'; // Import syntax highlighting theme

const Awsscripts = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset copy state after 2 seconds
  };

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-900 text-white">
      <section className="my-8">
        <h2 className="text-3xl font-semibold text-gray-100">AWS Automation Scripts Documentation</h2>
        <p className="mt-4 text-gray-400">
          This documentation provides AWS CLI and Python commands with detailed explanations and the ability to copy the code snippets for easy usage.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Example 1: Creating an S3 bucket */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-100">Create an S3 Bucket</h3>
          <p className="mt-2 text-gray-400">
            This command creates an S3 bucket in a specified AWS region. The bucket name must be globally unique.
          </p>
          <CopyToClipboard text="aws s3 mb s3://my-unique-bucket-name --region us-west-2">
            <button
              onClick={handleCopy}
              className="mt-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none flex items-center"
            >
              <FaCopy className="mr-2" />
              Copy Command
            </button>
          </CopyToClipboard>
          {copied && <span className="mt-2 text-green-400">Command copied!</span>}
          <div className="mt-4 text-gray-300">
            <pre className="bg-gray-700 p-4 rounded-lg overflow-x-auto">
              <code className="language-bash">{`aws s3 mb s3://my-unique-bucket-name --region us-west-2`}</code>
            </pre>
          </div>
          <p className="mt-2 text-gray-400">
            <strong>Explanation:</strong> This command creates a new S3 bucket named 'my-unique-bucket-name' in the <strong>us-west-2</strong> region.
          </p>
          <p className="mt-2 text-gray-400">
            <strong>Requirements:</strong> You need AWS CLI installed and configured with appropriate IAM permissions to create S3 buckets.
          </p>
          <p className="mt-2 text-red-400">
            <strong>Error Tip:</strong> If you receive "BucketAlreadyExists", ensure the bucket name is unique globally. AWS bucket names must be unique across all AWS customers.
          </p>
        </div>

        {/* Example 2: Starting an EC2 instance */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-100">Start an EC2 Instance</h3>
          <p className="mt-2 text-gray-400">
            This command starts an EC2 instance by specifying the instance ID. The instance must be in a stopped state to start it.
          </p>
          <CopyToClipboard text="aws ec2 start-instances --instance-ids i-1234567890abcdef0">
            <button
              onClick={handleCopy}
              className="mt-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none flex items-center"
            >
              <FaCopy className="mr-2" />
              Copy Command
            </button>
          </CopyToClipboard>
          {copied && <span className="mt-2 text-green-400">Command copied!</span>}
          <div className="mt-4 text-gray-300">
            <pre className="bg-gray-700 p-4 rounded-lg overflow-x-auto">
              <code className="language-bash">{`aws ec2 start-instances --instance-ids i-1234567890abcdef0`}</code>
            </pre>
          </div>
          <p className="mt-2 text-gray-400">
            <strong>Explanation:</strong> This command starts the EC2 instance with the ID <strong>i-1234567890abcdef0</strong>.
          </p>
          <p className="mt-2 text-gray-400">
            <strong>Requirements:</strong> Ensure you have AWS CLI installed and configured with the required IAM permissions. The instance should be in a stopped state.
          </p>
          <p className="mt-2 text-red-400">
            <strong>Error Tip:</strong> If the instance is already running, you may see the error "An error occurred (InvalidInstanceState)". Ensure the instance is stopped before starting it.
          </p>
        </div>

        {/* Example 3: Launch an EC2 Instance */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-100">Launch an EC2 Instance</h3>
          <p className="mt-2 text-gray-400">
            This command launches an EC2 instance using an AMI ID. You need to specify the instance type and security group.
          </p>
          <CopyToClipboard text="aws ec2 run-instances --image-id ami-0abcdef1234567890 --count 1 --instance-type t2.micro --key-name MyKeyPair --security-group-ids sg-075fcf8a015b3d5b5">
            <button
              onClick={handleCopy}
              className="mt-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none flex items-center"
            >
              <FaCopy className="mr-2" />
              Copy Command
            </button>
          </CopyToClipboard>
          {copied && <span className="mt-2 text-green-400">Command copied!</span>}
          <div className="mt-4 text-gray-300">
            <pre className="bg-gray-700 p-4 rounded-lg overflow-x-auto">
              <code className="language-bash">{`aws ec2 run-instances --image-id ami-0abcdef1234567890 --count 1 --instance-type t2.micro --key-name MyKeyPair --security-group-ids sg-075fcf8a015b3d5b5`}</code>
            </pre>
          </div>
          <p className="mt-2 text-gray-400">
            <strong>Explanation:</strong> This command launches an EC2 instance with the specified AMI ID, instance type, key pair, and security group.
          </p>
          <p className="mt-2 text-gray-400">
            <strong>Requirements:</strong> Ensure AWS CLI is installed and configured. You also need a valid AMI ID, key pair, and security group.
          </p>
          <p className="mt-2 text-red-400">
            <strong>Error Tip:</strong> If you receive "InvalidAMIID.NotFound", ensure that the AMI ID is correct and available in your region.
          </p>
        </div>

        {/* Example 4: Python Boto3 to Create an S3 Bucket */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-100">Create an S3 Bucket with Python (Boto3)</h3>
          <p className="mt-2 text-gray-400">
            This Python code uses Boto3 to create an S3 bucket.
          </p>
          <CopyToClipboard text={`import boto3\n\ns3 = boto3.client('s3')\ns3.create_bucket(Bucket='my-unique-bucket-name', CreateBucketConfiguration={'LocationConstraint': 'us-west-2'})`}>
            <button
              onClick={handleCopy}
              className="mt-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none flex items-center"
            >
              <FaCopy className="mr-2" />
              Copy Command
            </button>
          </CopyToClipboard>
          {copied && <span className="mt-2 text-green-400">Command copied!</span>}
          <div

 className="mt-4 text-gray-300">
            <pre className="bg-gray-700 p-4 rounded-lg overflow-x-auto">
              <code className="language-python">{`import boto3\n\ns3 = boto3.client('s3')\ns3.create_bucket(Bucket='my-unique-bucket-name', CreateBucketConfiguration={'LocationConstraint': 'us-west-2'})`}</code>
            </pre>
          </div>
          <p className="mt-2 text-gray-400">
            <strong>Explanation:</strong> This Python script creates an S3 bucket in the <strong>us-west-2</strong> region using Boto3, AWS's Python SDK.
          </p>
          <p className="mt-2 text-gray-400">
            <strong>Requirements:</strong> Ensure you have Boto3 installed (`pip install boto3`) and have the necessary AWS credentials configured.
          </p>
          <p className="mt-2 text-red-400">
            <strong>Error Tip:</strong> If you receive "botocore.exceptions.SSLError", ensure that you have valid SSL certificates and your network settings allow HTTPS requests.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Awsscripts;
