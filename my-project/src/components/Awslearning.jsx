import React from "react";

const services = [
  { name: "Amazon EC2", link: "https://aws.amazon.com/ec2/" },
  { name: "Amazon S3", link: "https://aws.amazon.com/s3/" },
  { name: "AWS Lambda", link: "https://aws.amazon.com/lambda/" },
  { name: "Amazon RDS", link: "https://aws.amazon.com/rds/" },
  { name: "AWS CloudFormation", link: "https://aws.amazon.com/cloudformation/" },
  { name: "AWS CloudWatch", link: "https://aws.amazon.com/cloudwatch/" },
];

const resources = [
  { name: "AWS Training and Certification", link: "https://aws.amazon.com/training/" },
  { name: "AWS Free Tier", link: "https://aws.amazon.com/free/" },
  { name: "AWS Documentation", link: "https://aws.amazon.com/documentation/" },
  { name: "AWS Blog", link: "https://aws.amazon.com/blogs/" },
];

const AwsLearning = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-8 font-mono">
      <h1 className="text-3xl font-semibold text-center mb-8">AWS Learning Resources</h1>

      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">AWS Services</h2>
          <ul className="space-y-2">
            {services.map((service) => (
              <li key={service.name} className="flex items-center justify-between bg-gray-800 p-4 rounded-lg shadow-md hover:bg-gray-700 transition-all">
                <a href={service.link} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-500">
                  {service.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Learning Resources</h2>
          <ul className="space-y-2">
            {resources.map((resource) => (
              <li key={resource.name} className="flex items-center justify-between bg-gray-800 p-4 rounded-lg shadow-md hover:bg-gray-700 transition-all">
                <a href={resource.link} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-500">
                  {resource.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AwsLearning;
