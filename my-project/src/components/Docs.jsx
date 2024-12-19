import React from 'react';

function Docs() {
  return (
    <div className="w-full min-h-screen bg-black text-gray-400">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-10">
        <h1 className="text-4xl font-bold text-center text-yellow-400 mb-6">
          AWS Cloud and Fundamentals of Cloud Computing
        </h1>

        <section className="space-y-8">
          {/* Introduction to Cloud Computing */}
          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">What is Cloud Computing?</h2>
            <p className="leading-relaxed">
              Cloud computing refers to the delivery of computing services, including servers, storage, databases, networking, software, analytics, and intelligence, over the Internet ("the cloud") to offer faster innovation, flexible resources, and economies of scale. Instead of owning physical data centers or servers, businesses can rent computing resources on-demand, only paying for what they use.
            </p>
          </div>

          {/* How Cloud Computing Evolved */}
          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">How Did Cloud Computing Evolve?</h2>
            <p className="leading-relaxed">
              Cloud computing evolved as businesses sought more cost-effective and scalable solutions to manage IT infrastructure. Advances in virtualization technology, the proliferation of high-speed internet, and the shift towards "as-a-service" models paved the way for the cloud. Companies like Amazon, Google, and Microsoft spearheaded this evolution by offering scalable cloud platforms, making enterprise-grade infrastructure accessible to businesses of all sizes.
            </p>
          </div>

          {/* What is AWS Cloud? */}
          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">What is AWS Cloud?</h2>
            <p className="leading-relaxed">
              Amazon Web Services (AWS) is the world’s most comprehensive and broadly adopted cloud platform. It offers over 200 fully featured services from data centers globally, including computing, storage, networking, machine learning, and more. AWS enables businesses to innovate faster, reduce IT costs, and scale effortlessly to meet changing demands.
            </p>
          </div>

          {/* Key Features of AWS */}
          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">Key Features of AWS</h2>
            <ul className="list-disc list-inside leading-relaxed">
              <li>Broad and Deep Service Offering: AWS provides services across multiple domains, such as compute, storage, databases, AI, and IoT.</li>
              <li>Global Infrastructure: AWS operates in multiple regions and availability zones to ensure high availability and fault tolerance.</li>
              <li>Scalability: Resources can be scaled up or down as needed to accommodate business demands.</li>
              <li>Pay-as-You-Go Pricing: AWS charges based on usage, eliminating the need for large upfront investments.</li>
              <li>Security: AWS offers advanced security features, including encryption, identity management, and compliance certifications.</li>
            </ul>
          </div>

          {/* Why Choose Cloud Computing? */}
          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">Why Choose Cloud Computing?</h2>
            <p className="leading-relaxed">
              Cloud computing provides a variety of benefits that make it a preferred choice for businesses and developers:
            </p>
            <ul className="list-disc list-inside leading-relaxed">
              <li>Cost Efficiency: Reduces capital expenditure on physical infrastructure.</li>
              <li>Speed and Agility: Enables faster deployment of applications and services.</li>
              <li>Flexibility: Access resources anytime, anywhere.</li>
              <li>Innovation: Focus on core business operations while leveraging the latest technologies.</li>
            </ul>
          </div>

          {/* AWS Services and Their Architecture */}
          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">AWS Services and Their Working Architecture</h2>
            <ul className="space-y-6 leading-relaxed">
              <li>
                <strong>1. Amazon EC2:</strong> Provides scalable virtual servers in the cloud. Architecture includes virtual machines, storage, and networking resources managed via a hypervisor.
              </li>
              <li>
                <strong>2. Amazon S3:</strong> A scalable object storage service for data backup, archival, and analytics. Data is stored in buckets across multiple availability zones.
              </li>
              <li>
                <strong>3. Amazon RDS:</strong> Managed relational database service supporting databases like MySQL, PostgreSQL, and Oracle. AWS handles setup, patching, and scaling.
              </li>
              <li>
                <strong>4. AWS Lambda:</strong> Serverless compute service that runs code in response to events. Architecture uses event sources, triggers, and execution environments.
              </li>
              <li>
                <strong>5. Amazon DynamoDB:</strong> NoSQL database designed for high availability and low-latency access. Uses a distributed architecture for scaling.
              </li>
              <li>
                <strong>6. Amazon CloudFront:</strong> A Content Delivery Network (CDN) for fast delivery of content. Uses edge locations for caching and reducing latency.
              </li>
              <li>
                <strong>7. AWS IAM:</strong> Manages user access and permissions securely. Uses roles, policies, and multi-factor authentication (MFA).
              </li>
              <li>
                <strong>8. Amazon VPC:</strong> Virtual Private Cloud for isolating resources in a secure network. Supports subnets, route tables, and network gateways.
              </li>
              <li>
                <strong>9. AWS CloudFormation:</strong> Automates infrastructure provisioning using templates. Architecture enables declarative resource management.
              </li>
              <li>
                <strong>10. Amazon EBS:</strong> Block storage for use with EC2 instances. Provides persistent storage for applications and databases.
              </li>
              <li>
                <strong>11. AWS Auto Scaling:</strong> Automatically adjusts resources based on demand. Works with EC2 and other services for cost efficiency.
              </li>
              <li>
                <strong>12. Amazon Elastic Beanstalk:</strong> Platform as a Service (PaaS) for deploying and scaling web applications. Manages infrastructure and deployment.
              </li>
              <li>
                <strong>13. AWS Glue:</strong> Managed ETL (Extract, Transform, Load) service for data integration. Uses a serverless architecture for processing.
              </li>
              <li>
                <strong>14. Amazon Redshift:</strong> Data warehouse for analytics. Uses a cluster-based architecture for parallel query execution.
              </li>
              <li>
                <strong>15. AWS CloudTrail:</strong> Tracks user activity and API usage for security and compliance. Logs are stored in S3 for analysis.
              </li>
              <li>
                <strong>16. Amazon SNS:</strong> Simple Notification Service for sending messages to subscribers. Uses a publish-subscribe architecture.
              </li>
              <li>
                <strong>17. Amazon SQS:</strong> Simple Queue Service for message queuing. Supports decoupled application components with reliable message delivery.
              </li>
              <li>
                <strong>18. AWS Elastic Load Balancing:</strong> Distributes incoming application traffic across multiple targets for scalability and reliability.
              </li>
              <li>
                <strong>19. AWS Step Functions:</strong> Orchestrates workflows using state machines. Simplifies application logic with visual representation.
              </li>
              <li>
                <strong>20. AWS CodePipeline:</strong> Automates software release pipelines. Integrates with various AWS and third-party tools for CI/CD workflows.
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Docs