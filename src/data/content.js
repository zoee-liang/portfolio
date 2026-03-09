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
  'context-engineering': {
    date: 'March 2026',
    overviewDiagramAfter: 1,
    overview: [
      'An LLM knows what a "pageview" is generically, but it doesn\'t know _your_ pageviews, _your_ funnel definitions, _your_ metric relationships, or _your_ business logic. This gap is why most AI data tools fail - they produce plausible-sounding answers that are subtly wrong because they lack the domain context to get it right.',
      'Context Engineering is the discipline of dynamically filling the context window of an AI model with information that maximizes its chances of success ([[https://towardsdatascience.com/context-engineering-as-your-competitive-edge/|Lipenkova, Towards Data Science, 2026]]). The article identifies three components of effective context: Knowledge, Tools, and Memory.',
      'This project applies that concept to the dbt Semantic Layer: a five-layer system that transforms raw column definitions into a rich, searchable knowledge base that powers the [[/projects/ai-data-chatbot|AI Data Chatbot]]\'s retrieval pipeline.',
      'The result: answer accuracy jumped from ~20-30% (generic AI querying raw metrics) to ~80% (AI with structured business context) - without changing the model.',
    ],
    architecture: {
      caption: 'Five-layer context engineering pipeline',
      description: [
        'The system spans two repositories and multiple CI/CD pipelines. In the dbt repo, analytics engineers define data models (Layer 1) and enrich them with business metadata (Layer 2). A Python script auto-syncs mart columns into semantic layer dimensions on every PR (Layer 3). On merge, a GitHub Actions workflow parses the enriched YAML, constructs embedding text, and indexes everything into ChromaDB vector stores (Layer 4). At query time, the AI agent uses agentic retrieval tools to search, inspect, and build accurate queries (Layer 5).',
        'Each layer builds on the one before it. The data models provide the foundation, metadata enrichment adds business understanding, the sync pipeline keeps dimensions current, vector indexing makes it searchable, and agentic retrieval puts it all in the AI\'s hands at query time.',
      ],
    },
    metadataFramework: {
      title: 'The Metadata Framework',
      description: [
        'This is the core innovation. Every measure and dimension in the Semantic Layer gets enriched with structured metadata that teaches the AI how to use it - not just what it is, but when to use it, what it relates to, and how business users think about it.',
        'For measures, the metadata includes fields like `business_context` (explaining when and why to use the metric), `synonyms` (mapping business language to technical names), `example_questions` (showing natural-language patterns), `related_metrics` (forming a navigable knowledge graph), `funnel_stage` and `funnel_position` (encoding business process structure), and `commonly_used_dimensions` (guiding the AI to pick the right groupings).',
        'For dimensions, the metadata includes `cardinality` (telling the AI whether it\'s safe to `GROUP BY`), `example_values` (showing what the data actually looks like), `usage_guidance` (passing along tribal knowledge like "use this as the primary time dimension"), and `related_dimensions` (linking dimensions that are often used together).',
        'This represents years of institutional knowledge from the analytics team, systematically encoded in a machine-readable format. When the AI searches for "product awareness trends," the `synonyms` and `business_context` surface the right metrics - and the `commonly_used_dimensions` and `cardinality` metadata guide it to build efficient, correct queries.',
      ],
    },
    vectorIndexing: {
      title: 'Vector Store Indexing',
      caption: 'Sample embedding text - enriched fields (amber) make this searchable by intent, not just metric name',
      description: [
        'When the CI/CD workflow runs, it triggers a three-stage indexing pipeline that transforms structured YAML metadata into searchable vectors:',
        'First, a parser reads all semantic model YAMLs and extracts structured data for each metric - name, description, type, aggregation, and all enriched metadata fields.',
        'Second, a formatting function constructs an embedding text document for each metric, combining core identification with all the enriched context into a single searchable string.',
        'The embedding text is the critical bridge - it determines what the AI can find via semantic search. A user asking "how many people are aware of the product?" would match on Business Context, Example Questions, and Also Known As - not just the technical metric name. The richer the metadata, the better the search results.',
        'Each metric is then stored in ChromaDB with both the embedding text (for search via `text-embedding-3-small`) and structured metadata (for filtering and retrieval). Dimensions are stored with fully-qualified names using the pattern `{entity}__{dimension_name}`, which is required by the dbt Semantic Layer API for query construction.',
      ],
    },
    agenticRetrieval: {
      title: 'Agentic Retrieval at Query Time',
      description: [
        'At query time, the AI agent uses two tools in an agentic loop (up to 8 turns) to find and validate the right metrics before building a query. The first tool, `search_vector_store`, performs semantic search across the enriched metadata - matching on `business_context`, `synonyms`, and `example_questions` rather than just metric names. Results are filtered by a similarity threshold (0.4) and ranked by relevance.',
        'The second tool, `get_metric_dimensions`, returns the exact dimension syntax and enriched metadata (`cardinality`, `example_values`, `usage_guidance`) for selected metrics. This is critical: the AI doesn\'t just find the right metric, it learns how to query it correctly.',
        'The system also tracks confidence at multiple levels. Similarity scores above 0.75 indicate high confidence; scores between 0.50-0.74 are medium; and anything below 0.40 is filtered out entirely to prevent hallucination. Every response includes a confidence indicator so users know when to trust the answer and when to dig deeper.',
      ],
    },
    cicd: {
      title: 'Keeping Context Fresh',
      caption: 'Automated CI/CD pipelines keeping context fresh',
      description: [
        'Manual metadata maintenance doesn\'t scale. If context decays, the chatbot\'s answers degrade. Two automated pipelines ensure the AI always has current knowledge.',
        'Pipeline 1 runs on every PR: a Python script scans mart model columns and auto-generates corresponding semantic layer dimensions with placeholder metadata. It uses a merge strategy that preserves existing enrichments (`business_context`, `synonyms`, etc.) while adding new columns - so analyst work is never overwritten. If changes are detected, the script commits them back to the PR branch automatically.',
        'Pipeline 2 runs on every merge to master: a GitHub Actions workflow rebuilds all vector stores (dbt metadata, semantic layer, few-shot examples), builds a metadata snapshot with AI-powered domain classification, uploads everything to Cloud Storage, and triggers a Cloud Build to redeploy the chatbot.',
        'The lifecycle is seamless: an analyst adds a new column to a mart model, the PR auto-generates the semantic dimension, the analyst enriches it with business context, and on merge the chatbot can query the new metric - with zero manual intervention.',
      ],
    },
    decisions: {
      items: [
        {
          title: 'Structured metadata over raw text',
          paragraphs: [
            'Early experiments dumped metric names and descriptions into a vector database and hoped for the best. This is the "naive RAG" approach - and it produced useful answers roughly 20-30% of the time. Most failures weren\'t LLM failures; they were context failures.',
            'The structured metadata approach - `business_context`, `synonyms`, `example_questions`, `related_metrics`, `funnel_stage`, `commonly_used_dimensions` - gives the AI a conceptual map of the data domain. Instead of pattern-matching on metric names, the AI understands how metrics relate to each other, which dimensions are appropriate for grouping, and what business users actually mean when they ask vague questions.',
          ],
        },
        {
          title: 'YAML as the metadata store',
          paragraphs: [
            'Metadata lives in YAML files alongside dbt semantic model definitions rather than in an external database or configuration service. This keeps metadata in the same repo as the models it describes, which means it flows through the same code review process: PRs, approvals, version history.',
            'The tradeoff is that YAML isn\'t queryable the way a database would be. But for this use case - metadata that changes on the same cadence as data models, maintained by the same people - co-location and reviewability matter more than query flexibility.',
          ],
        },
        {
          title: 'Merge strategy for dimension sync',
          paragraphs: [
            'The dimension generation script uses a merge-not-replace strategy: when syncing mart columns to semantic dimensions, it preserves all existing enrichments (`business_context`, `synonyms`, `cardinality`, `usage_guidance`) while adding new columns with placeholder metadata. This was essential because the enrichment work is done by analysts manually - overwriting it would destroy the most valuable part of the system.',
            'The script also force-updates descriptions from the mart model, so documentation changes flow through automatically. This balances automation (new columns appear without manual effort) with preservation (enrichment work is never lost).',
          ],
        },
        {
          title: 'Domain experts as metadata authors',
          paragraphs: [
            'Engineers build the pipeline; analysts write the `business_context`, `example_questions`, and `synonyms`. Neither can do the other\'s job effectively. An engineer might write technically accurate descriptions, but the business context, the tribal knowledge about when to use one metric over another - that comes from the people who use the data daily.',
            'This is a deliberate organizational design choice. The metadata framework provides the structure; domain experts fill it with knowledge. The CI/CD automation ensures their work reaches the AI without manual deployment steps.',
          ],
        },
      ],
    },
    results: {
      items: [
        {
          title: 'Accuracy',
          paragraphs: [
            'The context engineering framework was the biggest lever for answer quality. Early versions of the [[/projects/ai-data-chatbot|AI Data Chatbot]] (a single agent querying the raw Semantic Layer with minimal context) produced useful answers roughly 20-30% of the time. After building the enriched metadata framework, accuracy jumped to ~80%.',
            'The improvement came from the AI having a structured understanding of what each metric means, how it\'s used, and what users typically want when they ask about it - rather than guessing based on metric names alone.',
          ],
        },
        {
          title: 'The competitive moat',
          paragraphs: [
            'Any team can spin up an LLM with a vector database. The model is interchangeable. The moat is the combination of deep domain knowledge encoded in metadata and the automated pipeline that keeps it current.',
            'A competitor would need to build the same data model depth, enrich hundreds of metrics with the same quality of business context, build the same CI/CD automation, and accumulate the same few-shot examples from real user interactions. The model is interchangeable. The context is not.',
          ],
        },
        {
          title: 'Reusable context layer',
          paragraphs: [
            'The metadata framework isn\'t just used by the chatbot. Because the enrichments live in the dbt Semantic Layer definitions, they\'re available to any tool that reads from the Semantic Layer - creating a reusable context layer that can power future AI-driven data tools without duplicating the knowledge work.',
          ],
        },
      ],
    },
    lessons: {
      title: 'What We Learned',
      items: [
        {
          title: 'Invest in knowledge representation first, AI second',
          paragraphs: [
            'We initially built the chatbot without the metadata enrichment framework, and accuracy suffered - the LLM was guessing at metrics with no understanding of business context. Building the context infrastructure first would have saved significant development time. Once we invested in the enriched metadata layer, accuracy jumped dramatically and the retrieval pipeline became far simpler to build on top of.',
          ],
        },
        {
          title: 'Automate or it decays',
          paragraphs: [
            'CI/CD for context is as important as CI/CD for code. The moment metadata maintenance becomes a manual chore, it stops happening. The two automated pipelines (dimension sync on PR, vector rebuild on merge) ensure the system keeps itself current.',
          ],
        },
        {
          title: 'Domain experts must be hands-on',
          paragraphs: [
            'Analysts write the `business_context`, `example_questions`, and `synonyms`. Engineers build the pipeline. Neither can do the other\'s job. This is what the article mentioned at the beginning calls "_a tight handshake between domain experts and engineers._"',
          ],
        },
        {
          title: 'Iterate based on real usage',
          paragraphs: [
            'Chatbot failures reveal metadata gaps. When the AI picks the wrong metric, the fix is often adding a synonym or clarifying the `business_context` - not changing the model or the retrieval logic. Real usage is the best feedback loop for improving context quality.',
          ],
        },
      ],
    },
    whatsNext: {
      intro: 'The context engineering framework is actively evolving:',
      items: [
        {
          title: 'User-level memory',
          paragraphs: [
            'Remembering user preferences across sessions - for example, a product manager who always wants data filtered to a specific region, or a marketing lead who prefers weekly over monthly granularity. This adds a personalization layer that makes the chatbot feel like it knows each user.',
          ],
        },
        {
          title: 'Feedback loops',
          paragraphs: [
            'Chatbot performance metrics feeding back into metadata improvement signals. When the AI consistently misidentifies a metric, that signal should surface as a prompt to improve the `business_context` or add a missing synonym - closing the loop between usage and knowledge quality.',
          ],
        },
        {
          title: 'Richer relationship graphs',
          paragraphs: [
            'More explicit connections between metrics across domains, not just within a single semantic model. Cross-domain relationships (e.g., linking engagement metrics to retention metrics) would allow the AI to surface insights that span business units.',
          ],
        },
      ],
    },
    stack: ['dbt Semantic Layer', 'Python', 'ChromaDB', 'OpenAI text-embedding-3-small', 'GitHub Actions', 'Google Cloud Storage', 'YAML', 'dbt Cloud Discovery API'],
  },
}
