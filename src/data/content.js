export const about = [
  "I started my career as a data analyst building reports in Excel and Tableau, and somewhere along the way I became the person who builds the platforms those reports run on.",
  "I've been a founding or first data hire throughout my career, which means I've gotten really comfortable with ambiguity, duct tape, and turning \"we don't have data infrastructure\" into \"actually, we do now, and they're automated.\"",
  "These days I co-own a data platform end-to-end, and I've been spending a lot of my time at the intersection of data infrastructure and AI, building things like internal AI agents and context engineering frameworks that make data platforms useful not just for humans, but for LLMs too.",
  "I care a lot about working on things that matter. I've gravitated toward mission-driven organizations throughout my career, and I think the best data work happens when you genuinely care about the people using what you build.",
  "Outside of work, I love spending time with my husband traveling the world and watching old movies. In my own time, I read, write, and am currently learning Buddhism. 🍵📖",
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
    slug: 'ai-data-chatbot',
    description:
      'Built and deployed an internal AI chatbot that gives teams natural language access to analytics data. Integrates a dbt MCP server for semantic context, powered by OpenAI agents, and hosted on Google Cloud Run.',
    tags: ['dbt MCP', 'OpenAI Agents', 'Google Cloud Run', 'Python'],
    outcome: 'Led team adoption of agentic analytics engineering practices',
    link: '',
  },
  {
    title: 'Context Engineering',
    slug: 'context-engineering',
    description:
      'Designed and built a metadata enrichment framework for the dbt Semantic Layer: adding business context, synonyms, tags, sample values, example questions, related metrics, and usage guidance that feeds into the AI agent\'s vector store as structured context, significantly improving natural-language query accuracy.',
    tags: ['dbt Semantic Layer', 'OpenAI', 'Vector Store', 'Python'],
    outcome: 'Reusable context layer now leveraged across AI-powered data tools',
    link: '',
  },
  {
    title: 'CI/CD Data Pipeline',
    slug: 'cicd-data-pipeline',
    description:
      'Designed and implemented a blue/green deployment strategy and full CI/CD pipeline for data releases using GitHub Actions and dbt Cloud, replacing ad-hoc changes with structured, validated production deployments.',
    tags: ['GitHub Actions', 'dbt Cloud', 'Snowflake'],
    outcome: 'Structured weekly deployments with full testing & validation',
    link: '',
  },
  {
    title: 'Snowflake Optimization',
    slug: 'snowflake-optimization',
    description:
      'Audited Snowflake warehouse configurations and dbt model materializations to identify inefficiencies. Refactored query patterns and warehouse sizing to dramatically improve pipeline performance.',
    tags: ['Snowflake', 'dbt', 'SQL'],
    outcome: '~60% reduction in dbt job runtime',
    link: '',
  },
]

export const projectDetails = {
  'ai-data-chatbot': {
    overview: [
      'This project started from a simple question: how do we make our data accessible to everyone, not just guarded in a BI tool?',
      'I built a multi-agent Slack chatbot that lets anyone on the team ask data questions in plain English on a tool they use everyday, and in a cost effective way. Behind the scenes, it uses LLM-based routing to classify queries and dispatch them to specialized agents - one for data analysis, one for metadata operations - before a document authoring agent synthesizes everything into a clean, readable report with dashboard links, CSV downloads and visualizations.',
      'The system is powered by OpenAI (GPT-5 / GPT-5-mini / GPT-4o-mini, optimized per agent for cost efficiency), uses ChromaDB vector stores for semantic search across few-shot examples, dbt metadata, the Semantic Layer, and integrates with the dbt MCP server.',
    ],
    architecture: {
      caption: 'Multi-agent architecture: Slack webhook to Cloud Run',
      description: [
        'The system runs on Google Cloud Run as a stateless Flask HTTP webhook. When a user sends a message in Slack, the request hits the webhook endpoint, which verifies the Slack signature and routes it through the multi-agent pipeline.',
        'The Orchestrator Agent (GPT-5-mini) classifies each query as a metadata, data analysis, or out-of-scope request. Data analysis queries go to the Data Analyst Agent, which runs a two-phase workflow: a retrieval phase (GPT-5) that searches vector stores and queries metrics via the dbt MCP server, followed by an analysis phase (GPT-5-mini) that generates and executes Python code in a sandboxed environment.',
        'Metadata queries go to the Data Operations Agent, which retrieves relevant metadata and can call the compiled SQL tool when needed.',
        'All results flow into the Document Authoring Agent (GPT-4o-mini), which synthesizes findings into a structured report with key findings, insights, related Looker dashboard links, a downloadable CSV, and visualizations when applicable. A confidence scorer evaluates the quality of each response based on vector similarity, query success, and result completeness.',
      ],
    },
    cicd: {
      caption: 'CI/CD pipeline: GitHub to Cloud Run via Cloud Build',
      description: [
        'Every push to main triggers a Google Cloud Build pipeline. The build first downloads pre-built ChromaDB vector stores and configuration files from a GCS bucket, then runs a multi-stage Docker build - a builder stage installs Python dependencies, and a runtime stage copies in the application code along with the vector stores and config.',
        'The resulting image is pushed to Google Container Registry and deployed to Cloud Run.',
      ],
    },
    dbtPipeline: {
      caption: 'dbt repo CI/CD pipeline: automated vector store & metadata rebuild',
      description: [
        'The chatbot\'s knowledge comes from the dbt repo. Whenever models or metrics change, a GitHub Actions workflow automatically rebuilds all the vector stores and metadata that power the chatbot\'s retrieval pipeline.',
        'The workflow runs in six steps: it rebuilds the dbt metadata vector store by fetching the latest models, sources, exposures, and tests from the dbt Cloud Discovery API; rebuilds the Semantic Layer vector store by parsing metric YAML definitions and extracting measures, dimensions, entities, and AI context (see my [[/projects/context-engineering|Context Engineering]] project for more details!); refreshes the few-shot examples index; builds a metadata snapshot with AI-powered domain classification across business verticals; uploads everything to Cloud Storage; and finally triggers a Cloud Build to redeploy the chatbot with the fresh data baked in.',
        'This means the chatbot is always in sync with the dbt repo - when someone adds a new metric or updates a model, the chatbot knows about it after the next deploy, with zero manual intervention.',
      ],
    },
    infrastructure: {
      description: [
        'Cloud Run scales to zero by default, which is great for cost but means the first request after idle hits a cold start. For an internal tool used primarily during business hours, I set up a Google Cloud Scheduler job that automatically scales the minimum instance count to 1 at 8:15 AM and back to 0 at 5:15 PM, Monday through Friday.',
        'This gives the team instant response times during working hours while keeping costs near zero on evenings and weekends - the best of both worlds.',
      ],
    },
    tooling: {
      description: [
        'The system integrates with several external services and GCP infrastructure. The dbt MCP server provides metric querying via HTTP/SSE with a JSON-RPC protocol, connecting to the Snowflake data warehouse. The dbt Cloud Discovery API (GraphQL) powers the metadata rebuild pipeline. All secrets are managed through GCP Secret Manager, and structured JSON logs flow to Cloud Logging for observability.',
        'Cloud Storage acts as the bridge between the dbt repo CI/CD (GitHub Actions writes vector stores and config) and the chatbot deploy pipeline (Cloud Build reads them). Runtime feedback logs are stored with a 90-day lifecycle policy that automatically transitions to NEARLINE storage for cost optimization.',
      ],
    },
    stack: ['OpenAI GPT-5 / GPT-5-mini / GPT-4o-mini', 'ChromaDB', 'dbt MCP Server (HTTP/SSE)', 'dbt Cloud Discovery API (GraphQL)', 'Google Cloud Run', 'Google Cloud Build', 'Google Cloud Scheduler', 'Google Cloud Storage', 'GCP Secret Manager', 'GCP Cloud Logging', 'Snowflake', 'Flask', 'Python', 'Docker', 'GitHub Actions'],
  },
}
