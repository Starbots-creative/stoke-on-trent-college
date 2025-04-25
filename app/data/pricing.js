const pricingData = {
  title: "Pricing",
  tiers: [
    {
      title: "ForgeCLI Basic",
      price: {
        monthly: "150",
        yearly: "1800",
      },
      overview:
        "Ideal for individuals or beginners who need essential CLI tools to automate simple workflows and manage basic tasks.",
      inclusions: [
        { name: "Custom Command Creation" },
        { name: "Task Runner" },
        { name: "Modular Extensions" },
        { name: "CLI Documentation" },
        { name: "Basic Cloud Integration" },
        { name: "Target Audience" },
      ],
      fimLink: "https://www.google.com",
    },
    {
      title: "ForgeCLI Pro",
      price: {
        monthly: "300",
        yearly: "3600",
      },
      overview:
        "Designed for professional developers or small teams who need more powerful features and advanced integrations.",
      inclusions: [
        { name: "Unlimited Custom Commands" },
        { name: "Advanced Task Automation" },
        { name: "Premium Extensions" },
        { name: "CLI Scripting" },
        { name: "Cloud & API Integrations" },
        { name: "Team Collaboration" },
        { name: "Premium Support" },
        { name: "Target Audience" },
      ],
      fimLink: "https://www.google.com",
    },
    {
      title: "ForgeCLI Enterprise",
      price: {
        monthly: "750",
        yearly: "9000",
      },
      overview:
        "For large teams and enterprises that require high scalability, security, and customized solutions for their development operations.",
      inclusions: [
        { name: "Custom CLI Framework" },
        { name: "Team Permissions" },
        { name: "Advanced Task Scheduling" },
        { name: "Workflow Automation" },
        { name: "Dedicated Server Depoloyment" },
        { name: "API Access & SDK" },
        { name: "Dedicated Account Manager" },
        { name: "Personalised Support" },
        { name: "On-Premise Deployment" },
        { name: "Target Audience" },
      ],
      fimLink: "https://www.google.com",
    },
  ],
};

export default pricingData;
