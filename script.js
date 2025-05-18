const projects = [
  {
    title: "n8n Workflow: Automating MySQL & Gmail",
    description: "Created an automation workflow using n8n that stores form data into a MySQL database and sends a confirmation email via Gmail.",
    link: "https://github.com/iszahnrl"
  },
  {
    title: "UiPath Bot Integrated with PHP",
    description: "Developed a UiPath robot that integrates with PHP through an API.The PHP script triggers the robot to perform a task.",
    link: "https://github.com/iszahnrl"
  },
  {
    title: "Glowry Candle Website",
    description: "An e-commerce website built with PHP and MySQL, featuring user membership tiers, discount logic, and full cart management.",
    link: "https://github.com/iszahnrl/glowry-candle"
  },
  {
    title: "Personalized Mobile App to Discover Youth Muslim Ideal Camping Companion",
    description: "A mobile application developed using Flutter in Android Studio to help Muslim youth find compatible camping companions based on shared values.",
    link: "https://github.com/iszahnrl/"
  }
];

const projectList = document.getElementById("project-list");

projects.forEach(project => {
  const card = document.createElement("div");
  card.className = "project-card";

  card.innerHTML = `
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <a href="${project.link}" target="_blank">🔗 View Project</a>
  `;

  projectList.appendChild(card);
});
