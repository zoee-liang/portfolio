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
    date: 'March 2026',
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
        'All results flow into the Document Authoring Agent (GPT-4o-mini), which synthesizes findings into a structured report with key findings, insights, related Looker dashboard links, a downloadable CSV, and visualizations when applicable. A confidence scorer evaluates the quality of each response based on vector similarity, query success, and result completeness. If the confidence score falls below a threshold, the bot would let the user know - suggesting they rephrase or break down a complex question, or tag the data team for support.',
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
    decisions: {
      items: [
        {
          title: 'Multi-agent architecture',
          paragraphs: [
            'The system didn\'t start as a multi-agent pipeline. Early versions used a single agent that handled everything: routing, retrieval, analysis, response formatting. It worked for simple questions, but as the scope grew, accuracy, speed and cost started to suffer. A single powerful model doing everything was expensive and slow, and a single cheap model doing everything wasn\'t accurate enough.',
            'Breaking the system into specialized agents solved this in a few ways (inspired by [[https://www.youtube.com/watch?v=0x60vgPx_k0|this great dbt Coalesce talk]]!). Each agent could use the right model for its task: GPT-5 for the retrieval phase where accuracy is most critical (finding the right metrics and dimensions), GPT-5-mini for orchestration and analysis where the task is more straightforward once you have the right data, and GPT-4o-mini for document authoring where the job is formatting and synthesis rather than reasoning. This cut costs significantly while actually improving accuracy, because each model is operating in the part of the problem it\'s best suited for. It also improved latency - cheaper models are faster, and most of the pipeline doesn\'t need the heavyweight model.',
          ],
        },
        {
          title: 'Two-phase retrieval + analysis',
          paragraphs: [
            'The Data Analyst Agent splits its work into two distinct phases rather than doing everything in a single pass. Phase 1 (retrieval) uses GPT-5 to search vector stores, resolve metric/dimension names, and query the dbt Semantic Layer via MCP. Phase 2 (analysis) uses GPT-5-mini to generate and execute Python code against the retrieved data.',
            'The reasoning: retrieval is the hardest part. If the agent pulls the wrong metric or misunderstands which dimension to group by, no amount of analysis will save the response. So the retrieval phase gets the most capable model and an agentic tool loop with up to 8 turns to get it right. Once the right data is in hand, the analysis step - computing aggregations, generating charts, calculating trends - is relatively mechanical. A smaller, faster model handles it well, and the user gets their answer sooner.',
          ],
        },
        {
          title: 'Flask over FastAPI',
          paragraphs: [
            'The chatbot is a Slack webhook handler - requests come in, get processed through the agent pipeline, and a response goes back. Flask is well-suited for this: it\'s simple, battle-tested, and the team is familiar with it.',
            'The concurrency question came up early. FastAPI\'s async model handles multiple concurrent requests efficiently within a single process, which matters at scale. But Flask with threading handles concurrency well enough for this use case - the application uses threaded request handling to support up to 30 concurrent user queries. Since most of the wall-clock time per request is spent waiting on external API calls (OpenAI, dbt MCP, vector store lookups), threads work naturally here - they release the GIL during I/O waits, so multiple requests can be in-flight simultaneously without blocking each other. This gives us solid concurrency without the complexity of async code - no await chains, no event loop debugging, and straightforward error traces. For an internal tool where 30 concurrent users is a comfortable upper bound, threading with Flask is simpler to maintain and has been working well in production.',
          ],
        },
        {
          title: 'Cloud Run over Cloud Functions',
          paragraphs: [
            'A few factors drove this choice. The agent pipeline can take minutes for complex queries (multiple LLM calls, vector store searches, an agentic tool loop, then Python code execution). Cloud Functions has tighter timeout constraints and less control over the runtime environment. Cloud Run gives full control over the container, which matters when the Docker image includes baked-in ChromaDB vector stores. It also enables the Cloud Scheduler optimization for managing cold starts during business hours - something that doesn\'t translate as cleanly to Functions.',
          ],
        },
        {
          title: 'Baked-in vector stores over hosted ChromaDB',
          paragraphs: [
            'The vector stores (dbt metadata, semantic layer, few-shot examples) are built during CI/CD and baked directly into the Docker image rather than queried from a hosted ChromaDB instance at runtime.',
            'The primary driver was latency. Every user query hits the vector store multiple times during the retrieval phase: searching for relevant metrics, matching dimensions, pulling few-shot examples. Network round-trips to a hosted database would add up fast, especially inside an agentic loop that can run up to 8 turns. With the vector stores in-memory on the same container, retrieval is near-instantaneous.',
            'The secondary benefit is cost and simplicity: no hosted database to manage, no additional platform to monitor, and one less service that can go down. The tradeoff is that the vector stores are only as fresh as the last deploy, but the dbt repo CI/CD pipeline handles this automatically: any change to models or metrics triggers a rebuild and redeploy, so the chatbot stays in sync without manual intervention.',
            'As the context store grows, the plan is to eventually migrate to Pinecone for better scalability and more advanced search capabilities. But for v1, keeping it simple and fast was the right call.',
          ],
        },
      ],
    },
    results: {
      items: [
        {
          title: 'Accuracy',
          paragraphs: [
            'The [[/projects/context-engineering|context engineering framework]] was the biggest lever for answer quality. Early versions of the chatbot (a single agent querying the raw Semantic Layer with minimal context) produced useful answers roughly 20-30% of the time. Most failures weren\'t LLM failures; they were context failures. The model didn\'t know the specific business context or data nuance that are only applicable to your company.',
            'After building the enriched metadata framework - adding business context, synonyms, example questions, related metrics, and usage guidance to every metric and dimension - accuracy jumped to ~80%. The model went from guessing at intent to having a structured understanding of what each metric means, how it\'s used, and what users typically want when they ask about it.',
          ],
        },
        {
          title: 'Speed',
          paragraphs: [
            'Before the chatbot, getting an answer to a data question meant Slacking the data team and waiting for someone to pick it up, understand the ask, write a query, and share the results. That process typically took days, sometimes weeks depending on the team\'s queue and the complexity of the request.',
            'With the chatbot, most questions are answered in minutes.',
          ],
        },
        {
          title: 'Cost efficiency',
          paragraphs: [
            'The multi-agent architecture with model-per-task routing brought the average cost per query down from ~$0.70-0.80 (single agent, single model) to ~$0.20 - roughly a 70-75% reduction. The savings come from using cheaper, faster models for tasks that don\'t need heavyweight reasoning while reserving the most capable model for the accuracy-critical retrieval step.',
            'For a tool that serves the entire data needs of a cross-functional team, the total cost is remarkably low.',
          ],
        },
      ],
    },
    whatsNext: {
      intro: 'This project is actively evolving. A few things on the roadmap:',
      items: [
        {
          title: 'Text-to-SQL fallback',
          paragraphs: [
            'The chatbot currently queries data exclusively through the dbt Semantic Layer, which keeps answers grounded and avoids hallucinated SQL. But not everything lives in the Semantic Layer yet. The next step is adding a text-to-SQL capability that kicks in when the requested data isn\'t available through the SL, using the agent\'s existing knowledge of the Semantic Layer schema as context to generate accurate custom SQL, rather than starting from scratch.',
          ],
        },
        {
          title: 'LangSmith for observability and evaluation',
          paragraphs: [
            'Right now, understanding why a query failed or returned a low-confidence answer requires digging through Cloud Logging. Adding LangSmith would give the team structured tracing across the full agent pipeline: every LLM call, tool invocation, and retrieval step, making it much easier to debug edge cases and systematically improve accuracy over time.',
          ],
        },
        {
          title: 'Evolving the Data Operations Agent',
          paragraphs: [
            'The current Data Ops agent handles metadata queries, but there\'s an opportunity to expand it into a more general-purpose assistant for the data team itself: handling day-to-day dbt operations like debugging job errors, surfacing model lineage, or answering questions about test coverage. This would make the bot useful not just for stakeholders asking data questions, but for the engineers maintaining the platform.',
          ],
        },
        {
          title: 'Pinecone migration',
          paragraphs: [
            'As the context store grows and more metrics, dimensions, and few-shot examples are added, the baked-in ChromaDB approach will eventually hit its limits. Migrating to Pinecone will provide better scalability, more advanced search capabilities, and decouple the vector store lifecycle from the application deploy cycle.',
          ],
        },
      ],
    },
    stack: ['OpenAI GPT-5 / GPT-5-mini / GPT-4o-mini', 'ChromaDB', 'dbt MCP Server (HTTP/SSE)', 'dbt Cloud Discovery API (GraphQL)', 'Google Cloud Run', 'Google Cloud Build', 'Google Cloud Scheduler', 'Google Cloud Storage', 'GCP Secret Manager', 'GCP Cloud Logging', 'Snowflake', 'Flask', 'Python', 'Docker', 'GitHub Actions'],
  },
}
