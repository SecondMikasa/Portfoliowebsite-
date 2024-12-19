import React, { useState } from "react";

const awsServices = [
  {
    title: "Amazon EC2",
    description:
      "Provides scalable virtual servers in the cloud. Architecture includes virtual machines, storage, and networking resources managed via a hypervisor.",
    detailedDescription: (
      <>
        <p>
          Amazon EC2 (Elastic Compute Cloud) is a service that enables users to run virtual machines (VMs) in the cloud, offering resizable compute capacity. It is the foundational service for computing on AWS and is used by businesses to scale their applications.
        </p>
        <h4 className="mt-4 text-lg font-semibold">Use Cases:</h4>
        <ul>
          <li>Hosting websites and web applications.</li>
          <li>Running big data applications.</li>
          <li>Scaling applications as per traffic needs.</li>
          <li>Running containerized applications with Kubernetes or Docker.</li>
        </ul>
        <h4 className="mt-4 text-lg font-semibold">Potential Failure Scenarios:</h4>
        <ul>
          <li>Insufficient instance type selection leading to performance issues.</li>
          <li>Instances failing to launch due to resource constraints in a region.</li>
          <li>Cost overruns if instances are not properly scaled down when not needed.</li>
        </ul>
        <h4 className="mt-4 text-lg font-semibold">Importance:</h4>
        <p>
          EC2 is fundamental to AWS's compute offerings, offering flexible scaling, powerful instances with customizable configurations, and a pay-as-you-go pricing model. It provides a secure and reliable compute environment, supporting businesses of all sizes.
        </p>
        <h4 className="mt-4 text-lg font-semibold">Underlying Concepts:</h4>
        <ul>
          <li>Virtualization: EC2 uses a hypervisor to allocate physical hardware to virtual instances.</li>
          <li>Elasticity: EC2 allows scaling instances up or down based on demand.</li>
          <li>AMI (Amazon Machine Image): Pre-configured OS images to launch EC2 instances quickly.</li>
        </ul>
      </>
    ),
  },
  {
    title: "Amazon S3",
    description:
      "A scalable object storage service for data backup, archival, and analytics. Data is stored in buckets across multiple availability zones.",
    detailedDescription: (
      <>
        <p>
          Amazon S3 (Simple Storage Service) is a highly scalable object storage service that allows you to store and retrieve data at any scale. It's ideal for backup, archival, and hosting static assets.
        </p>
        <h4 className="mt-4 text-lg font-semibold">Use Cases:</h4>
        <ul>
          <li>Backup and restore data.</li>
          <li>Storing static assets like images, videos, and files for websites.</li>
          <li>Archiving large datasets for compliance or disaster recovery purposes.</li>
        </ul>
        <h4 className="mt-4 text-lg font-semibold">Potential Failure Scenarios:</h4>
        <ul>
          <li>Data loss due to improper bucket policy or misconfiguration of permissions.</li>
          <li>High costs due to improper storage class usage (e.g., using Standard instead of Glacier for archival data).</li>
        </ul>
        <h4 className="mt-4 text-lg font-semibold">Importance:</h4>
        <p>
          S3 is essential for businesses to scale their storage needs without worrying about capacity. It is highly reliable and cost-effective, offering various storage classes and tools to manage data lifecycle efficiently.
        </p>
        <h4 className="mt-4 text-lg font-semibold">Underlying Concepts:</h4>
        <ul>
          <li>Buckets: S3 stores data in containers called "buckets".</li>
          <li>Storage Classes: Choose from Standard, Intelligent-Tiering, Glacier, and more based on access frequency.</li>
          <li>Versioning: S3 allows versioning of objects to preserve, retrieve, and restore previous versions.</li>
        </ul>
      </>
    ),
  },
  {
    title: "Amazon RDS",
    description:
      "Managed relational database service supporting databases like MySQL, PostgreSQL, and Oracle. AWS handles setup, patching, and scaling.",
    detailedDescription: (
      <>
        <p>
          Amazon RDS (Relational Database Service) makes it easier to set up, operate, and scale a relational database in the cloud. RDS supports multiple database engines like MySQL, PostgreSQL, Oracle, and MariaDB.
        </p>
        <h4 className="mt-4 text-lg font-semibold">Use Cases:</h4>
        <ul>
          <li>Running enterprise applications with relational data.</li>
          <li>Scaling databases automatically to meet application demands.</li>
          <li>Automated backups, patch management, and high availability for databases.</li>
        </ul>
        <h4 className="mt-4 text-lg font-semibold">Potential Failure Scenarios:</h4>
        <ul>
          <li>Data loss due to incorrect backup settings.</li>
          <li>Database performance degradation under high load if not scaled properly.</li>
          <li>Network issues between RDS and EC2 instances affecting database performance.</li>
        </ul>
        <h4 className="mt-4 text-lg font-semibold">Importance:</h4>
        <p>
          RDS is important for businesses that require scalable, managed databases. It abstracts away most of the operational tasks, providing a highly available and secure environment for relational databases.
        </p>
        <h4 className="mt-4 text-lg font-semibold">Underlying Concepts:</h4>
        <ul>
          <li>Automated Backups: RDS takes backups automatically and allows point-in-time recovery.</li>
          <li>Read Replicas: Helps in scaling read-heavy applications by offloading read operations to replicas.</li>
          <li>Multi-AZ Deployments: Increases availability and durability by replicating data to different Availability Zones.</li>
        </ul>
      </>
    ),
  },
  {
    title: "AWS Lambda",
    description:
      "Serverless compute service that runs code in response to events. Architecture uses event sources, triggers, and execution environments.",
    detailedDescription: (
      <>
        <p>
          AWS Lambda is a serverless compute service that automatically runs your code in response to events without needing to provision or manage servers.
        </p>
        <h4 className="mt-4 text-lg font-semibold">Use Cases:</h4>
        <ul>
          <li>Real-time file processing in S3.</li>
          <li>Running backend code for mobile and web apps without managing servers.</li>
          <li>Building event-driven applications such as serverless microservices.</li>
        </ul>
        <h4 className="mt-4 text-lg font-semibold">Potential Failure Scenarios:</h4>
        <ul>
          <li>Function timeouts if code execution exceeds the maximum duration.</li>
          <li>Cold start latency if functions are not invoked frequently.</li>
        </ul>
        <h4 className="mt-4 text-lg font-semibold">Importance:</h4>
        <p>
          Lambda allows you to focus purely on your code, without worrying about provisioning infrastructure, scaling, or managing servers. It also integrates well with other AWS services, making it a powerful tool for building modern applications.
        </p>
        <h4 className="mt-4 text-lg font-semibold">Underlying Concepts:</h4>
        <ul>
          <li>Event Sources: Lambda functions are triggered by events from other AWS services like S3, DynamoDB, or CloudWatch.</li>
          <li>Execution Role: Lambda functions require an execution role for permission to access other AWS resources.</li>
          <li>Cold Starts: Lambda functions may experience latency the first time they are invoked, as the execution environment is initialized.</li>
        </ul>
      </>
    ),
  },
  {
    title: "Amazon DynamoDB",
    description:
      "NoSQL database designed for high availability and low-latency access. Uses a distributed architecture for scaling.",
    detailedDescription: (
      <>
        <p>
          Amazon DynamoDB is a fully managed NoSQL database service designed to deliver low-latency performance at any scale.
        </p>
        <h4 className="mt-4 text-lg font-semibold">Use Cases:</h4>
        <ul>
          <li>Real-time applications requiring fast reads and writes, such as gaming or mobile apps.</li>
          <li>IoT data storage.</li>
          <li>Sessions, metadata, and high-velocity data storage for big data analytics.</li>
        </ul>
        <h4 className="mt-4 text-lg font-semibold">Potential Failure Scenarios:</h4>
        <ul>
          <li>Provisioned throughput limits can be exceeded, causing request throttling.</li>
          <li>Incorrect schema design leading to inefficient queries and high costs.</li>
        </ul>
        <h4 className="mt-4 text-lg font-semibold">Importance:</h4>
        <p>
          DynamoDB offers a NoSQL solution for applications that require consistent, low-latency access to data, and is highly scalable, making it ideal for high-traffic applications.
        </p>
        <h4 className="mt-4 text-lg font-semibold">Underlying Concepts:</h4>
        <ul>
          <li>Tables: Data is stored in tables, with items (rows) and attributes (columns).</li>
          <li>Provisioned vs. On-Demand Capacity: You can either set read and write capacity or allow DynamoDB to automatically scale.</li>
          <li>Global Secondary Indexes: Used for querying data using attributes other than the primary key.</li>
        </ul>
      </>
    ),
  },
  // Add more services here...
];

function Docs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleServiceDetails = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full min-h-screen bg-black text-gray-400">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-10">
        <h1 className="text-4xl font-bold text-center text-yellow-400 mb-6">
          AWS Cloud and Fundamentals of Cloud Computing
        </h1>

        <section className="space-y-8">
          {/* Introduction to Cloud Computing */}
          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">
              What is Cloud Computing?
            </h2>
            <p className="leading-relaxed">
              Cloud computing refers to the delivery of computing services,
              including servers, storage, databases, networking, software,
              analytics, and intelligence, over the Internet ("the cloud") to
              offer faster innovation, flexible resources, and economies of
              scale. Instead of owning physical data centers or servers,
              businesses can rent computing resources on-demand, only paying for
              what they use.
            </p>
          </div>

          {/* AWS Services and Their Architecture */}
          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">
              AWS Services and Their Working Architecture
            </h2>
            <ul className="space-y-6 leading-relaxed">
              {awsServices.map((service, index) => (
                <li key={index}>
                  <div
                    onClick={() => toggleServiceDetails(index)}
                    className="cursor-pointer text-yellow-400 font-semibold mb-2"
                  >
                    {service.title}
                  </div>
                  {activeIndex === index && (
                    <div className="text-gray-300">
                      {service.detailedDescription}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Docs;
