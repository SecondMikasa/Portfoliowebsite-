import React, { useState } from "react";

function Docs() {
  const [activeSection, setActiveSection] = useState("#cloud-computing");

  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen bg-black text-gray-400">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-gray-800 text-white p-4 md:p-6 fixed md:relative z-10 md:h-auto h-screen overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">Navigation</h2>
        <nav className="space-y-2">
          {[
            { id: "#cloud-computing", title: "What is Cloud Computing?" },
            { id: "#evolution", title: "How Did Cloud Computing Evolve?" },
            { id: "#aws-cloud", title: "What is AWS Cloud?" },
            { id: "#key-features", title: "Key Features of AWS" },
            { id: "#why-cloud", title: "Why Choose Cloud Computing?" },
            { id: "#aws-services", title: "AWS Services and Their Architecture" },
            { id: "#aws-use-cases", title: "AWS Use Cases and Benefits" },
            { id: "#aws-pricing", title: "AWS Pricing and Models" },
          ].map((item) => (
            <a
              key={item.id}
              href={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`block px-4 py-2 rounded-lg ${
                activeSection === item.id
                  ? "bg-yellow-400 text-black"
                  : "hover:bg-gray-700 hover:text-yellow-400"
              }`}
            >
              {item.title}
            </a>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 max-w-6xl mx-auto px-4 py-6 md:px-10 md:py-10 mt-20 md:mt-0">
        <h1 className="text-4xl font-bold text-center text-yellow-400 mb-6">
          AWS Cloud and Fundamentals of Cloud Computing
        </h1>

        <section className="space-y-12">
          {/* Introduction to Cloud Computing */}
          <div id="cloud-computing">
            <h2 className="text-2xl font-semibold text-white mb-2">
              What is Cloud Computing?
            </h2>
            <p className="leading-relaxed">
              Cloud computing is the on-demand availability of computing
              resources, including storage, databases, servers, networking, and
              software, over the internet. Instead of owning their own physical
              infrastructure or data centers, organizations can rent computing
              power and storage as needed.
            </p>
            <ul className="list-disc list-inside leading-relaxed">
              <li>
                On-demand resources allow businesses to scale up or down
                efficiently.
              </li>
              <li>
                Cloud services are offered by providers such as Amazon Web
                Services (AWS), Microsoft Azure, and Google Cloud Platform
                (GCP).
              </li>
            </ul>
          </div>

          {/* How Cloud Computing Evolved */}
          <div id="evolution">
            <h2 className="text-2xl font-semibold text-white mb-2">
              How Did Cloud Computing Evolve?
            </h2>
            <p className="leading-relaxed">
              Cloud computing evolved from traditional IT infrastructure and
              virtualization technologies. Its roots can be traced back to the
              emergence of time-sharing systems in the 1960s. Key milestones
              include:
            </p>
            <ul className="list-disc list-inside leading-relaxed">
              <li>
                The introduction of virtualization in the early 2000s, allowing
                efficient use of hardware resources.
              </li>
              <li>
                The launch of Amazon Web Services (AWS) in 2006, which marked
                the commercial availability of cloud services.
              </li>
              <li>
                Rapid advancements in containerization technologies like
                Docker, enhancing application portability.
              </li>
            </ul>
          </div>

          {/* What is AWS Cloud? */}
          <div id="aws-cloud">
            <h2 className="text-2xl font-semibold text-white mb-2">
              What is AWS Cloud?
            </h2>
            <p className="leading-relaxed">
              AWS (Amazon Web Services) is a comprehensive and widely adopted
              cloud platform offering over 200 fully featured services from
              data centers globally. AWS provides scalable, cost-effective, and
              secure infrastructure for businesses of all sizes.
            </p>
            <p className="leading-relaxed">
              AWS services cover areas like:
            </p>
            <ul className="list-disc list-inside leading-relaxed">
              <li>Compute (EC2, Lambda)</li>
              <li>Storage (S3, EBS, Glacier)</li>
              <li>Networking (VPC, Route 53)</li>
              <li>Databases (RDS, DynamoDB)</li>
            </ul>
          </div>

          {/* Key Features of AWS */}
          <div id="key-features">
            <h2 className="text-2xl font-semibold text-white mb-2">
              Key Features of AWS
            </h2>
            <ul className="list-disc list-inside leading-relaxed">
              <li>
                <strong>Scalability:</strong> AWS can handle increased workloads
                automatically with tools like Auto Scaling and Elastic Load
                Balancing.
              </li>
              <li>
                <strong>Global Reach:</strong> With data centers in multiple
                regions worldwide, AWS ensures low latency and availability.
              </li>
              <li>
                <strong>Security:</strong> AWS implements robust security
                measures including encryption, compliance, and monitoring.
              </li>
            </ul>
          </div>

          {/* Why Choose Cloud Computing? */}
          <div id="why-cloud">
            <h2 className="text-2xl font-semibold text-white mb-2">
              Why Choose Cloud Computing?
            </h2>
            <ul className="list-disc list-inside leading-relaxed">
              <li>
                <strong>Cost Efficiency:</strong> Pay only for the resources you
                use, avoiding the need for upfront capital investment.
              </li>
              <li>
                <strong>Flexibility:</strong> Access your resources anywhere,
                anytime.
              </li>
              <li>
                <strong>Disaster Recovery:</strong> Back up your data and
                services in geographically dispersed locations.
              </li>
            </ul>
          </div>

          {/* AWS Services */}
          <div id="aws-services">
            <h2 className="text-2xl font-semibold text-white mb-2">
              AWS Services and Their Working Architecture
            </h2>
            <ul className="list-disc list-inside leading-relaxed">
              <li>
                <strong>Amazon EC2:</strong> Virtual servers for running
                applications.
              </li>
              <li>
                <strong>Amazon S3:</strong> Scalable object storage.
              </li>
              <li>
                <strong>Amazon RDS:</strong> Managed database services for SQL
                and NoSQL.
              </li>
            </ul>
          </div>

          {/* AWS Use Cases */}
          <div id="aws-use-cases">
            <h2 className="text-2xl font-semibold text-white mb-2">
              AWS Use Cases and Benefits
            </h2>
            <ul className="list-disc list-inside leading-relaxed">
              <li>
                <strong>Web Hosting:</strong> Host websites and web
                applications with high availability.
              </li>
              <li>
                <strong>Data Analytics:</strong> Analyze large datasets using
                tools like AWS Redshift.
              </li>
              <li>
                <strong>Machine Learning:</strong> Build and deploy AI models
                with AWS SageMaker.
              </li>
            </ul>
          </div>

          {/* AWS Pricing */}
          <div id="aws-pricing">
            <h2 className="text-2xl font-semibold text-white mb-2">
              AWS Pricing and Models
            </h2>
            <p className="leading-relaxed">
              AWS offers several pricing models, including:
            </p>
            <ul className="list-disc list-inside leading-relaxed">
              <li>
                <strong>Pay-as-you-go:</strong> Only pay for the resources you
                use.
              </li>
              <li>
                <strong>Reserved Instances:</strong> Commit to long-term usage
                for cost savings.
              </li>
              <li>
                <strong>Spot Instances:</strong> Purchase unused capacity at a
                discounted rate.
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Docs;
