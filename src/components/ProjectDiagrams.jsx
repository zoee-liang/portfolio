function Arrow({ className = '' }) {
  return (
    <svg className={`w-4 h-8 text-gray-300 mx-auto shrink-0 ${className}`} viewBox="0 0 16 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <path d="M8 2 L8 26 M4 22 L8 28 L12 22" />
    </svg>
  )
}

function ArrowRight({ className = '' }) {
  return (
    <svg className={`w-8 h-4 text-gray-300 shrink-0 ${className}`} viewBox="0 0 32 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <path d="M2 8 L26 8 M22 4 L28 8 L22 12" />
    </svg>
  )
}

function Box({ children, className = '', accent = false, highlight = false }) {
  return (
    <div className={`sketch-border px-3 py-2 text-center text-xs leading-relaxed ${
      accent ? 'bg-amber-50/60 border-amber-200' :
      highlight ? 'bg-gray-50' :
      'bg-white'
    } ${className}`}>
      {children}
    </div>
  )
}

function Label({ children, className = '' }) {
  return <span className={`text-[10px] text-gray-400 italic ${className}`}>{children}</span>
}

export function ArchitectureDiagram() {
  return (
    <div className="flex flex-col items-center gap-1 py-6">
      {/* Slack User */}
      <Box className="bg-emerald-50/60 border-emerald-200 px-6">
        <span className="font-hand text-sm font-medium text-gray-700">Slack (User)</span>
      </Box>

      <Arrow />
      <Label>HTTPS Webhook POST</Label>
      <Arrow />

      {/* Cloud Run Container */}
      <div className="w-full sketch-border bg-blue-50/30 border-blue-200 p-4 flex flex-col items-center gap-1">
        <span className="font-hand text-sm font-medium text-gray-600 mb-2">Google Cloud Run</span>

        {/* HTTP Handler */}
        <Box>
          <div className="font-medium text-gray-700">HTTP Handler (Flask)</div>
          <div className="text-gray-400">Signature verify &middot; rate limiting &middot; routing</div>
        </Box>

        <Arrow />

        {/* Orchestrator */}
        <Box>
          <div className="font-medium text-gray-700">Orchestrator Agent</div>
          <div className="text-gray-400">GPT-5-mini &middot; classifies: metadata / data_analysis</div>
        </Box>

        <Arrow />

        {/* Branch: two paths */}
        <div className="w-full flex flex-col md:flex-row items-center md:items-start justify-center gap-3 md:gap-4">
          {/* Metadata path */}
          <div className="flex flex-col items-center gap-1 flex-1 max-w-[220px]">
            <Label>metadata</Label>
            <Arrow className="h-5" />
            <Box className="w-full">
              <div className="font-medium text-gray-700">Data Operations Agent</div>
              <div className="text-gray-400">GPT-5-mini &middot; vector store search &middot; compiled SQL</div>
            </Box>
          </div>

          {/* Data analysis path */}
          <div className="flex flex-col items-center gap-1 flex-1 max-w-[280px]">
            <Label>data_analysis</Label>
            <Arrow className="h-5" />
            <Box className="w-full" highlight>
              <div className="font-medium text-gray-700">Data Analyst Agent</div>
              <div className="text-gray-400 mt-1">Phase 1 &mdash; Retrieval (GPT-5)</div>
            </Box>
            <Arrow className="h-5" />
            <Box accent className="w-full">
              <div className="font-medium text-gray-700">Agentic Tool Loop</div>
              <div className="text-gray-400">up to 8 turns</div>
              <div className="text-gray-400 mt-0.5">search_vector_store() &middot; get_metric_dimensions() &middot; query_metrics (dbt MCP)</div>
            </Box>
            <Arrow className="h-5" />
            <Box accent className="w-full">
              <div className="font-medium text-gray-700">Python Codegen + Sandboxed Execution</div>
              <div className="text-gray-400">Phase 2 &mdash; Analysis (GPT-5-mini)</div>
            </Box>
          </div>
        </div>

        <Arrow />

        {/* Document Author */}
        <Box>
          <div className="font-medium text-gray-700">Document Authoring Agent</div>
          <div className="text-gray-400">GPT-4o-mini &middot; synthesize report &middot; dashboard links &middot; CSV &middot; visualizations</div>
        </Box>

        <Arrow className="h-5" />

        {/* Vector Stores */}
        <Box highlight className="border-dashed">
          <div className="font-medium text-gray-700">Vector Stores (ChromaDB)</div>
          <div className="text-gray-400">few-shot examples &middot; semantic layer &middot; dbt metadata</div>
          <div className="text-gray-400">(baked into Docker image at build)</div>
        </Box>
      </div>

      <Arrow />
      <Label>Response</Label>
      <Arrow />

      {/* Slack User */}
      <Box className="bg-emerald-50/60 border-emerald-200 px-6">
        <span className="font-hand text-sm font-medium text-gray-700">Slack (User)</span>
      </Box>
    </div>
  )
}

export function DbtPipelineDiagram() {
  return (
    <div className="flex flex-col items-center gap-1 py-6 max-w-md mx-auto">
      {/* GitHub dbt repo */}
      <Box className="bg-gray-800 border-gray-700 w-full">
        <div className="font-medium text-white">GitHub &middot; dbt (master)</div>
        <div className="text-gray-400">Push / Merge (triggers on models/** changes)</div>
      </Box>

      <Arrow />

      {/* GitHub Actions */}
      <Box className="bg-violet-50/80 border-violet-300 w-full">
        <div className="font-medium text-gray-700">GitHub Actions Workflow</div>
        <div className="text-gray-400">sync_chatbot_assets.yml</div>
      </Box>

      <Arrow />

      {/* Step 1 */}
      <Box className="w-full">
        <div className="font-medium text-gray-700">Step 1: Rebuild dbt Metadata Vector Store</div>
      </Box>
      <Arrow className="h-5" />
      <div className="w-full pl-4 flex flex-col items-center gap-1">
        <Box highlight className="w-full">
          <div className="text-gray-500">dbt Cloud Discovery API (GraphQL)</div>
          <div className="text-gray-400">Fetch models &middot; sources &middot; exposures &middot; tests</div>
        </Box>
        <Arrow className="h-5" />
        <Box highlight className="w-full border-dashed">
          <div className="text-gray-500">Index &rarr; ChromaDB</div>
          <div className="text-gray-400">dbt_metadata collection</div>
        </Box>
      </div>

      <Arrow />

      {/* Step 2 */}
      <Box className="w-full">
        <div className="font-medium text-gray-700">Step 2: Rebuild Semantic Layer Vector Store</div>
      </Box>
      <Arrow className="h-5" />
      <div className="w-full pl-4 flex flex-col items-center gap-1">
        <Box highlight className="w-full">
          <div className="text-gray-500">Parse metric YAML definitions</div>
          <div className="text-gray-400">semantic models &middot; measures &middot; dimensions &middot; meta fields &middot; entities &middot; derived metrics</div>
        </Box>
        <Arrow className="h-5" />
        <Box highlight className="w-full border-dashed">
          <div className="text-gray-500">Index &rarr; ChromaDB</div>
          <div className="text-gray-400">semantic_layer collection</div>
        </Box>
      </div>

      <Arrow />

      {/* Step 3 */}
      <Box className="w-full">
        <div className="font-medium text-gray-700">Step 3: Rebuild Few-Shot Examples</div>
      </Box>
      <Arrow className="h-5" />
      <div className="w-full pl-4">
        <Box highlight className="w-full border-dashed">
          <div className="text-gray-500">Load examples &rarr; Index &rarr; ChromaDB</div>
          <div className="text-gray-400">few_shot_examples collection</div>
        </Box>
      </div>

      <Arrow />

      {/* Step 4 */}
      <Box className="w-full">
        <div className="font-medium text-gray-700">Step 4: Build Metadata Snapshot</div>
      </Box>
      <Arrow className="h-5" />
      <div className="w-full pl-4 flex flex-col items-center gap-1">
        <Box highlight className="w-full">
          <div className="text-gray-500">Inputs</div>
          <div className="text-gray-400">discovery_results.json (Step 1) &middot; semantic_layer_parsed.json (Step 2)</div>
        </Box>
        <Arrow className="h-5" />
        <Box accent className="w-full">
          <div className="font-medium text-gray-700">AI Domain Classification</div>
          <div className="text-gray-400">GPT-4o-mini, batched</div>
          <div className="text-gray-400">Classifies models &amp; metrics across business verticals</div>
        </Box>
        <Arrow className="h-5" />
        <Box highlight className="w-full">
          <div className="text-gray-500">Output: snapshot.json</div>
          <div className="text-gray-400">domains &middot; metrics index &middot; models index</div>
        </Box>
      </div>

      <Arrow />

      {/* Step 5 */}
      <Box className="w-full">
        <div className="font-medium text-gray-700">Step 5: Upload to Cloud Storage</div>
        <div className="text-gray-400">vector stores &middot; metadata snapshot &middot; config</div>
      </Box>

      <Arrow />

      {/* Step 6 */}
      <Box className="w-full">
        <div className="font-medium text-gray-700">Step 6: Upload Build Metadata</div>
        <div className="text-gray-400">timestamp &middot; commit &middot; branch &middot; run ID</div>
      </Box>

      <Arrow />

      {/* Triggers Cloud Build */}
      <Box className="bg-emerald-50/60 border-emerald-200 w-full">
        <span className="font-hand text-sm font-medium text-gray-700">Triggers Cloud Build &rarr; Redeploys Cloud Run</span>
      </Box>
    </div>
  )
}

export function ToolingDiagram() {
  return (
    <div className="flex flex-col gap-4 py-6">
      {/* External APIs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <Box className="text-left">
          <div className="font-medium text-gray-700 mb-1">OpenAI API</div>
          <div className="text-gray-400 space-y-0.5">
            <div>GPT-5 / GPT-5-mini / GPT-4o-mini</div>
            <div>text-embedding-3-small</div>
          </div>
        </Box>
        <Box className="text-left">
          <div className="font-medium text-gray-700 mb-1">dbt MCP (HTTP/SSE)</div>
          <div className="text-gray-400 space-y-0.5">
            <div>JSON-RPC &middot; 600s timeout</div>
            <div>query_metrics</div>
            <div>get_metrics_compiled_sql</div>
          </div>
        </Box>
        <Box className="text-left">
          <div className="font-medium text-gray-700 mb-1">Snowflake</div>
          <div className="text-gray-400 space-y-0.5">
            <div>Data Warehouse</div>
            <div>(via dbt MCP)</div>
          </div>
        </Box>
      </div>

      {/* Discovery API */}
      <Box className="text-left">
        <div className="font-medium text-gray-700 mb-1">dbt Cloud Discovery API (GraphQL)</div>
        <div className="text-gray-400">models &middot; sources &middot; exposures &middot; tests</div>
        <div className="text-gray-400 text-[10px] mt-1 italic">Used in GitHub Actions for metadata rebuild &amp; AI classification</div>
      </Box>

      {/* Cloud Storage */}
      <Box className="text-left">
        <div className="font-medium text-gray-700 mb-2">Google Cloud Storage</div>
        <div className="space-y-1">
          <div className="flex justify-between text-gray-400">
            <span>vector-stores/</span>
            <span className="text-[10px] italic">&larr; written by GH Actions, read by Cloud Build</span>
          </div>
          <div className="flex justify-between text-gray-400">
            <span>config/</span>
            <span className="text-[10px] italic">&larr; written by GH Actions, read by Cloud Build</span>
          </div>
          <div className="flex justify-between text-gray-400">
            <span>feedback/</span>
            <span className="text-[10px] italic">&larr; runtime feedback logs</span>
          </div>
          <div className="text-[10px] text-gray-300 mt-1">(batched writes &middot; 90-day lifecycle to NEARLINE)</div>
        </div>
      </Box>

      {/* GCP Services */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <Box className="text-left">
          <div className="font-medium text-gray-700 mb-1">GCP Cloud Logging</div>
          <div className="text-gray-400">Structured JSON logs from Cloud Run</div>
        </Box>
        <Box className="text-left">
          <div className="font-medium text-gray-700 mb-1">GCP Secret Manager</div>
          <div className="text-gray-400">API keys &middot; tokens &middot; signing secrets</div>
          <div className="text-gray-400 text-[10px] mt-0.5 italic">Slack, OpenAI, dbt Cloud, dbt MCP</div>
        </Box>
      </div>
    </div>
  )
}

export function CiCdDiagram() {
  return (
    <div className="flex flex-col items-center gap-1 py-6 max-w-sm mx-auto">
      {/* GitHub */}
      <Box className="bg-gray-800 border-gray-700 w-full">
        <div className="font-medium text-white">GitHub Repository</div>
        <div className="text-gray-400">Push / Merge to main</div>
      </Box>

      <Arrow />

      {/* Cloud Build */}
      <Box className="bg-amber-50/80 border-amber-300 w-full">
        <div className="font-medium text-gray-700">Google Cloud Build</div>
      </Box>

      <Arrow />

      {/* Step 1 */}
      <Box className="w-full">
        <div className="font-medium text-gray-700">Step 1: Download Vector Stores</div>
        <div className="text-gray-400">Pre-built ChromaDB from Cloud Storage</div>
      </Box>

      <Arrow />

      {/* Step 2 */}
      <Box className="w-full">
        <div className="font-medium text-gray-700">Step 2: Download Config</div>
        <div className="text-gray-400">Application config from Cloud Storage</div>
      </Box>

      <Arrow />

      {/* Step 3: Docker Build */}
      <Box accent className="w-full">
        <div className="font-medium text-gray-700">Step 3: Docker Build (2-stage)</div>
      </Box>

      <Arrow className="h-5" />

      <div className="w-full pl-6 flex flex-col items-center gap-1">
        <Box className="w-full">
          <div className="font-medium text-gray-700">Stage 1 &mdash; Builder</div>
          <div className="text-gray-400">Install Python dependencies</div>
        </Box>
        <Arrow className="h-5" />
        <Box className="w-full">
          <div className="font-medium text-gray-700">Stage 2 &mdash; Runtime</div>
          <div className="text-gray-400">Copy app code, vector stores, and config into image</div>
        </Box>
      </div>

      <Arrow />

      {/* Step 4 */}
      <Box className="w-full">
        <div className="font-medium text-gray-700">Step 4: Push to Container Registry</div>
      </Box>

      <Arrow />

      {/* Step 5 */}
      <Box className="w-full">
        <div className="font-medium text-gray-700">Step 5: Deploy to Cloud Run</div>
        <div className="text-gray-400">--timeout 600</div>
      </Box>

      <Arrow />

      {/* Live */}
      <Box className="bg-emerald-50/60 border-emerald-200 w-full">
        <span className="font-hand text-sm font-medium text-gray-700">Live on Cloud Run</span>
      </Box>
    </div>
  )
}
