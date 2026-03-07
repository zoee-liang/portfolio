export const about = [
  "I started my career as a data analyst building reports in Excel and Tableau, and somewhere along the way I became the person who builds the platforms those reports run on.",
  "I've been a founding or first data hire throughout my career, which means I've gotten really comfortable with ambiguity, duct tape, and turning \"we don't have data infrastructure\" into \"actually, we do now.\"",
  "These days I co-own a data platform end-to-end and I've been spending a lot of my time at the intersection of data infrastructure and AI, building things like internal AI agents and context engineering frameworks that make data platforms useful not just for humans, but for LLMs too.",
  "I care a lot about working on things that matter. I've gravitated toward mission-driven organizations throughout my career, and I think the best data work happens when you genuinely care about the people using what you build.",
  "Outside of work, I love reading, writing, and currently learning Buddhism. 🍵📖",
]

export const experience = [
  {
    company: 'Understood',
    year: '2023',
    location: 'Remote',
    period: 'Mar 2023 – Present',
    titles: ['Senior Data Platform Engineer', 'Senior Analytics Engineer'],
    titleYears: ['2025', '2023'],
    stack: ['Snowplow', 'Snowflake', 'dbt', 'Looker', 'Monte Carlo', 'GitHub'],
    bullets: [
      'Co-own the end-to-end data platform: infrastructure, architecture, transformation, orchestration, and observability - partnering with a fellow senior platform engineer to serve cross-functional teams including Product, Engineering, Research, Content, and Marketing.',
      'Joined as the most senior analytics engineer on the data team and owned the end-to-end project to design and implement blue/green deployments and CI/CD pipelines using GitHub Actions and dbt Cloud, transforming ad-hoc data releases into structured, weekly production deployments with full testing and validation.',
      'Built and deployed an internal AI data chatbot using dbt MCP server, OpenAI agents, and Google Cloud Run - led the team\'s adoption of agentic analytics engineering practices, including agentic code development, prompt engineering best practice, automating data operations such as dbt job error debugging.',
      "Designed and built a context engineering framework for the dbt Semantic Layer: adding business context, synonyms, tags, sample values, example questions, related metrics, and usage guidance that feeds into the AI agent's vector store as structured context, significantly improving natural-language query accuracy and creating a reusable context layer now leveraged across AI-powered data tools.",
      'Implemented advanced materialization such as microbatch incremental models and multi-layer monitoring (dbt tests, Monte Carlo, Looker alerts) to catch metric regressions and upstream schema changes before they impact reporting.',
      'Optimized Snowflake warehouse usage and query performance, reducing dbt job runtime by ~60% and improving cost efficiency.',
      'Mentored analysts and junior analytics engineers, improving data literacy and enabling self-service analytics across teams.',
    ],
  },
  {
    company: 'Hightouch',
    year: '2022',
    location: 'Remote',
    period: 'Jun 2022 – Mar 2023',
    titles: ['Analytics Engineer'],
    stack: ['Postgres', 'Dagster', 'Fivetran', 'Snowflake', 'dbt', 'Looker', 'Hex', 'Hightouch', 'GitHub'],
    bullets: [
      'Joined as the foundational analytics engineering hire and scaled dbt from a single-domain project into a centralized analytics platform serving multiple business units.',
      'Designed and maintained analytics models adhering to dimensional modeling best practices.',
      'Owned and maintained revenue and finance reporting in dbt and Looker, tracking company KPI such as ARR, MRR, and churn for GTM and RevOps stakeholders to support strategic decision-making.',
      'Orchestrated and monitored end-to-end pipelines using Dagster, dbt Cloud, and Hightouch, improving data reliability and observability.',
      'Established analytics engineering workflows (version control, CI, documentation), raising overall data quality and team velocity.',
    ],
  },
  {
    company: 'Wellthy',
    year: '2021',
    location: 'Remote',
    period: 'Jun 2021 – Jun 2022',
    titles: ['Data Analyst'],
    stack: ['Postgres', 'Stitch', 'Snowflake', 'dbt', 'Mode', 'GitHub'],
    bullets: [
      'Joined as the founding data hire and built foundational dbt models and core business metrics powering leadership dashboards from scratch.',
      'Developed forecasting ML models to inform company-wide staffing and operational planning decision-making.',
      'Partnered cross-functionally with Product, Marketing, Operations, and Customer Success to deliver actionable insights.',
      'Created centralized data dictionary to improve analytics consistency, data adoption, and literacy across the company.',
    ],
  },
  {
    company: 'Whitaker Brothers Inc',
    year: '2020',
    location: 'Rockville, MD',
    period: 'Feb 2020 – Jun 2021',
    titles: ['Data Analyst'],
    stack: ['MySQL', 'Excel', 'Google Analytics', 'Tableau', 'Jupyter Notebook'],
    bullets: [
      'Automated manual reporting workflows by building API pipelines between MySQL and Tableau, cutting weekly manual reporting time by 50%.',
      'Used Python and SQL for extracting, transforming, and analyzing customer and product data, enabling data-driven marketing campaigns and pricing strategies.',
    ],
  },
]

export const skills = [
  {
    category: 'Data Platform & Warehousing',
    items: ['Snowflake', 'Postgres', 'MySQL', 'Fivetran', 'Stitch', 'Snowplow', 'Hightouch'],
  },
  {
    category: 'Orchestration & Build Tools',
    items: ['dbt Core (Certified)', 'dbt Cloud', 'Dagster', 'GitHub Actions', 'GitHub'],
  },
  {
    category: 'Business Intelligence & Semantic Layer',
    items: ['Looker', 'Hex', 'Mode', 'Tableau', 'dbt Semantic Layer'],
  },
  {
    category: 'Data Quality & Observability',
    items: ['Monte Carlo', 'dbt tests', 'Google Cloud'],
  },
  {
    category: 'AI / LLM Engineering',
    items: ['MCP Server', 'Agentic Engineering', 'LangGraph', 'LangSmith', 'Context Engineering', 'Prompt Engineering', 'Google Cloud Run'],
  },
  {
    category: 'Programming',
    items: ['SQL', 'Python'],
  },
]

export const projects = [
  {
    title: 'AI Data Chatbot',
    description:
      'Built and deployed an internal AI chatbot that gives teams natural language access to analytics data. Integrates a dbt MCP server for semantic context, powered by OpenAI agents, and hosted on Google Cloud Run.',
    tags: ['dbt MCP', 'OpenAI Agents', 'Google Cloud Run', 'Python'],
    outcome: 'Led team adoption of agentic analytics engineering practices',
    link: '',
  },
  {
    title: 'Context Engineering',
    description:
      'Designed and built a metadata enrichment framework for the dbt Semantic Layer: adding business context, synonyms, tags, sample values, example questions, related metrics, and usage guidance that feeds into the AI agent\'s vector store as structured context, significantly improving natural-language query accuracy.',
    tags: ['dbt Semantic Layer', 'OpenAI', 'Vector Store', 'Python'],
    outcome: 'Reusable context layer now leveraged across AI-powered data tools',
    link: '',
  },
  {
    title: 'CI/CD Data Pipeline',
    description:
      'Designed and implemented a blue/green deployment strategy and full CI/CD pipeline for data releases using GitHub Actions and dbt Cloud, replacing ad-hoc changes with structured, validated production deployments.',
    tags: ['GitHub Actions', 'dbt Cloud', 'Snowflake'],
    outcome: 'Structured weekly deployments with full testing & validation',
    link: '',
  },
  {
    title: 'Snowflake Optimization',
    description:
      'Audited Snowflake warehouse configurations and dbt model materializations to identify inefficiencies. Refactored query patterns and warehouse sizing to dramatically improve pipeline performance.',
    tags: ['Snowflake', 'dbt', 'SQL'],
    outcome: '~60% reduction in dbt job runtime',
    link: '',
  },
]
