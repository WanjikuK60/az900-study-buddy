const topics = [
  {
    id: "cloud-computing",
    domain: "cloud",
    icon: "☁",
    title: "Cloud computing",
    keywords: ["cloud computing", "cloud", "consumption based", "pay as you go", "serverless", "wingu ni nini", "kompyuta ya wingu", "mpesa", "m-pesa", "kplc"],
    simple: "Cloud computing is using computing services over the internet when you need them, instead of buying and maintaining every server yourself. You can provision resources on demand and pay according to the pricing model and your usage.",
    example: "Buying airtime or KPLC tokens is a loose memory aid for paying as you use a service. An M-Pesa transaction is a familiar digital service, but it does not tell us what cloud provider, if any, operates it. Cloud billing is not exactly prepaid airtime: it depends on selected resources and pricing.",
    exam: "Know on-demand access, consumption-based pricing, and that serverless still uses servers managed by the provider.",
    simpleSw: "Cloud computing ni kutumia huduma za kompyuta kupitia intaneti unapozihitaji, badala ya kununua na kutunza kila seva mwenyewe. Unaweza kuomba rasilimali unapozihitaji na kulipa kulingana na matumizi na mfumo wa bei.",
    exampleSw: "Ni kama kutumia umeme wa gridi badala ya kujenga kituo cha umeme nyumbani. Mtoa huduma husimamia miundombinu ya pamoja, nawe hutumia huduma unayohitaji. Bado bili hutegemea matumizi na bei.",
    examSw: "Kumbuka upatikanaji unapohitaji, malipo kulingana na matumizi, na kwamba serverless bado hutumia seva zinazosimamiwa na mtoa huduma."
  },
  {
    id: "cloud-models",
    domain: "cloud",
    icon: "◉",
    title: "Public, private & hybrid cloud",
    keywords: ["public cloud", "private cloud", "hybrid cloud", "cloud models", "deployment model", "wingu la umma", "wingu binafsi", "wingu mseto"],
    simple: "A public cloud shares a provider's infrastructure among customers. A private cloud is dedicated to one organization. A hybrid cloud connects public and private environments so workloads or data can use both.",
    example: "A market trader can rent a shared stall in a public market, keep a private workshop, or use both. It is only a memory aid: cloud deployment models have specific ownership, access, and management boundaries.",
    exam: "Public, private, and hybrid describe cloud deployment models. Hybrid combines environments; it does not mean choosing between them.",
    simpleSw: "Public cloud hushiriki miundombinu ya mtoa huduma kati ya wateja. Private cloud imejitolea kwa shirika moja. Hybrid cloud huunganisha mazingira ya public na private ili kutumia yote mawili.",
    exampleSw: "Biashara inaweza kuweka mfumo nyeti kwenye mazingira yake ya private na tovuti ya umma kwenye Azure. Chaguo hutegemea usalama, udhibiti, gharama na mahitaji ya uendeshaji.",
    examSw: "Public, private na hybrid ni aina za deployment. Hybrid huunganisha mazingira; si kuchagua moja tu."
  },
  {
    id: "service-types",
    domain: "cloud",
    icon: "▤",
    title: "IaaS, PaaS & SaaS",
    keywords: ["iaas", "paas", "saas", "service model", "infrastructure as a service", "platform as a service", "software as a service", "aina za huduma"],
    simple: "IaaS gives you virtual infrastructure to configure. PaaS provides a managed platform for building and running applications. SaaS is a ready-to-use application delivered over a network. The provider manages more of the stack as you move from IaaS to SaaS.",
    example: "IaaS is like renting an empty shop and arranging the interior. PaaS is a fitted-out kitchen where you focus on the recipe. SaaS is ordering a prepared meal. The comparison is a memory aid, not a perfect technical match.",
    exam: "In all three models, responsibilities are shared. IaaS gives the customer more control; SaaS gives the provider more management responsibility.",
    simpleSw: "IaaS hukupa miundombinu pepe ya kusanidi. PaaS hukupa jukwaa linalosimamiwa la kujenga na kuendesha programu. SaaS ni programu iliyo tayari inayotolewa kupitia mtandao. Mtoa huduma husimamia sehemu kubwa zaidi kutoka IaaS hadi SaaS.",
    exampleSw: "IaaS ni kama kukodi duka tupu na kulipanga. PaaS ni jiko lenye vifaa tayari ambapo unazingatia mapishi. SaaS ni kuagiza chakula kilichoandaliwa. Huu ni mfano wa kukumbuka tu, si ulinganisho kamili.",
    examSw: "Katika aina zote tatu, majukumu hushirikishwa. IaaS humpa mteja udhibiti zaidi; SaaS humpa mtoa huduma wajibu zaidi wa usimamizi."
  },
  {
    id: "shared-responsibility",
    domain: "cloud",
    icon: "⛨",
    title: "Shared responsibility",
    keywords: ["shared responsibility", "security", "customer responsibility", "provider responsibility", "wajibu wa pamoja", "jukumu la usalama", "usalama wa wingu"],
    simple: "Cloud security is shared between the provider and customer. Microsoft is responsible for parts of the cloud infrastructure; customers remain responsible for their data, identities, and the settings they control. The boundary changes with the service type.",
    example: "A landlord maintains the shop structure while you protect your stock and decide who holds the keys. The exact cloud responsibility boundary changes with the service model; this rental example is not a security guarantee.",
    exam: "Customers always retain responsibility for their data and identities. Do not assume the provider secures every customer setting.",
    simpleSw: "Usalama wa wingu hushirikishwa kati ya mtoa huduma na mteja. Microsoft huwajibika kwa sehemu za miundombinu ya wingu; wateja huendelea kuwajibika kwa data, utambulisho na mipangilio wanayodhibiti. Mpaka wa wajibu hubadilika kulingana na aina ya huduma.",
    exampleSw: "Unapokodi duka salama, mwenye jengo hutunza jengo lakini wewe husimamia bidhaa na funguo zako. Huduma ya wingu inayosimamiwa zaidi humwachia mtoa huduma kazi zaidi za miundombinu.",
    examSw: "Wateja huendelea kuwajibika kwa data na utambulisho wao. Usidhani kwamba mtoa huduma husimamia kila mpangilio wa mteja."
  },
  {
    id: "cloud-benefits",
    domain: "cloud",
    icon: "↗",
    title: "Cloud benefits & serverless",
    keywords: ["availability", "scalability", "elasticity", "reliability", "predictability", "manageability", "benefits", "serverless", "upatikanaji", "kutegemewa", "upanuzi"],
    simple: "Cloud services can help you adjust capacity, design for availability and reliability, and manage resources with provider tools. Serverless lets a team focus on code while the provider manages the server infrastructure; it does not mean there are no servers.",
    example: "A matatu operator may add vehicles on a busy Friday evening and reduce trips when demand drops. A backup generator can help during a power cut, but real cloud availability depends on architecture and service design, not one generator.",
    exam: "Scalability means changing capacity to meet demand; elasticity emphasizes adjusting as demand changes. Cloud can help, but it does not guarantee reliability or lower cost automatically.",
    simpleSw: "Huduma za wingu zinaweza kusaidia kurekebisha uwezo, kubuni upatikanaji na kutegemewa, na kusimamia rasilimali kwa zana za mtoa huduma. Serverless humruhusu mtengenezaji kuzingatia msimbo huku mtoa huduma akisimamia seva; haimaanishi hakuna seva.",
    exampleSw: "Duka linaweza kuandaa bidhaa nyingi zaidi msimu wenye wateja wengi na chache mahitaji yakipungua. Rasilimali za wingu pia zinaweza kuendana na mahitaji, lakini usanifu mzuri bado ni muhimu.",
    examSw: "Scalability ni kubadilisha uwezo kulingana na mahitaji; elasticity husisitiza kurekebisha uwezo mahitaji yanapobadilika. Wingu halihakikishi kutegemewa au gharama nafuu moja kwa moja."
  },
  {
    id: "azure-hierarchy",
    domain: "architecture",
    icon: "▦",
    title: "Azure resources & hierarchy",
    keywords: ["resource", "resource group", "subscription", "management group", "hierarchy", "tenant", "kikundi cha rasilimali"],
    simple: "An Azure resource is an individual service instance, such as a virtual machine. Resource groups organize related resources. Subscriptions are management and billing boundaries. Management groups help organize multiple subscriptions. These scopes form a hierarchy for applying management and access controls.",
    example: "Think of a school system: a management group can organize subscriptions, a subscription can contain resource groups, and each group can contain resources for one project.",
    exam: "Know the order: management groups → subscriptions → resource groups → resources. A resource belongs to one resource group at a time.",
    simpleSw: "Azure resource ni huduma moja, kama virtual machine. Resource group hupanga rasilimali zinazohusiana. Subscription ni mpaka wa usimamizi na bili. Management group hupanga subscriptions nyingi. Viwango hivi husaidia kupanga usimamizi na ruhusa.",
    exampleSw: "Fikiria mfumo wa shule: management group hupanga subscriptions, subscription huwa na resource groups, na kila group huwa na resources za mradi.",
    examSw: "Kumbuka mpangilio: management groups → subscriptions → resource groups → resources. Resource moja huwa kwenye resource group moja kwa wakati."
  },
  {
    id: "regions-zones",
    domain: "architecture",
    icon: "◎",
    title: "Regions, region pairs & zones",
    keywords: ["region", "regions", "availability zone", "zones", "region pair", "sovereign region", "datacenter", "maeneo ya upatikanaji", "eneo"],
    simple: "An Azure region is a geographic area containing one or more datacenters. Availability zones are physically separate locations within a supported region. Region pairs are paired regions in the same geography for certain platform considerations; not every service or recovery design automatically uses them.",
    example: "A service with branches in Nairobi, Mombasa, and Kisumu has geographic separation; separate sites within one city are a looser zone analogy. Azure regions and zones are distinct datacenter locations, not city branches, and placement alone does not guarantee recovery.",
    exam: "A region is not an availability zone. Zone availability varies by region and service. Choose locations based on latency, data residency, resilience, and service availability.",
    simpleSw: "Azure region ni eneo la kijiografia lenye kituo kimoja au zaidi cha data. Availability zones ni maeneo tofauti ya kimwili ndani ya region inayoyaunga mkono. Region pairs ni regions zinazooanishwa ndani ya jiografia moja kwa sababu fulani za huduma; si kila huduma hutumia jozi hizo moja kwa moja.",
    exampleSw: "Kuweka nakala za rekodi muhimu kwenye majengo tofauti Nairobi kunaweza kupunguza athari ya tatizo kwenye jengo moja. Region tofauti hutoa mtengano wa kijiografia; zone ni eneo tofauti ndani ya region.",
    examSw: "Region si availability zone. Zones hupatikana kulingana na region na huduma. Chagua eneo ukizingatia latency, mahali data inapaswa kuhifadhiwa, resilience na upatikanaji wa huduma."
  },
  {
    id: "compute",
    domain: "architecture",
    icon: "▣",
    title: "Azure compute options",
    keywords: ["compute", "virtual machine", "vm", "containers", "container", "functions", "scale sets", "virtual desktop", "web apps", "kontena", "mashine pepe"],
    simple: "Virtual machines provide configurable virtual computers. Containers package an application and its dependencies for consistent deployment. Functions run code in response to events without you managing the server infrastructure. Azure also offers managed web app hosting and virtual machine scale sets.",
    example: "A VM is like having your own room to arrange. A container is a packed kit that can be carried between rooms. A function is like asking a service to do one task when a delivery arrives.",
    exam: "Choose a compute option by considering control, portability, management effort, and workload pattern—not by assuming one option fits everything.",
    simpleSw: "Virtual machines ni kompyuta pepe unazoweza kusanidi. Containers huweka programu na mahitaji yake pamoja ili ipelekwe kwa uthabiti. Functions huendesha msimbo tukio linapotokea bila wewe kusimamia miundombinu ya seva. Azure pia ina web apps zinazosimamiwa na virtual machine scale sets.",
    exampleSw: "VM ni kama chumba chako cha kupanga. Container ni kifurushi kinachoweza kuhamishwa kutoka chumba kimoja hadi kingine. Function ni kama kuomba huduma ifanye kazi moja kifurushi kinapowasili.",
    examSw: "Chagua compute ukizingatia udhibiti, portability, kazi ya usimamizi na aina ya workload—si kwa kudhani chaguo moja linafaa kila kitu."
  },
  {
    id: "networking",
    domain: "architecture",
    icon: "⌘",
    title: "Azure networking",
    keywords: ["network", "networking", "virtual network", "vnet", "subnet", "peering", "dns", "vpn gateway", "expressroute", "endpoint", "mtandao", "mitandao"],
    simple: "Azure Virtual Network (VNet) is a private network boundary for Azure resources. Subnets divide a VNet. Peering connects VNets over the Azure backbone. VPN Gateway uses encrypted tunnels over the internet; ExpressRoute provides a private connection through a connectivity provider.",
    example: "A VNet is like a private road network for your cloud resources. Subnets are neighborhoods, and a gateway is a controlled route between networks.",
    exam: "Public endpoints are reachable over the public internet; private endpoints use a private IP in a VNet to connect privately to a supported service.",
    simpleSw: "Azure Virtual Network (VNet) ni mpaka wa mtandao binafsi wa resources za Azure. Subnets hugawa VNet. Peering huunganisha VNets kupitia mtandao wa Azure. VPN Gateway hutumia njia fiche kupitia intaneti; ExpressRoute hutoa muunganisho binafsi kupitia mtoa huduma wa mawasiliano.",
    exampleSw: "VNet ni kama mtandao wa barabara binafsi wa resources za wingu. Subnets ni vitongoji, na gateway ni njia inayodhibitiwa kati ya mitandao.",
    examSw: "Public endpoint hufikiwa kupitia intaneti ya umma; private endpoint hutumia IP binafsi ndani ya VNet kuunganisha huduma inayoungwa mkono."
  },
  {
    id: "storage",
    domain: "architecture",
    icon: "▤",
    title: "Azure Storage",
    keywords: ["storage", "blob", "file", "queue", "table", "redundancy", "storage tier", "cool", "archive", "azcopy", "data box", "hifadhi", "kuhifadhi", "mama mboga"],
    simple: "Azure Storage includes services such as Blob Storage for object data, Azure Files for managed file shares, Queues for messages, and Tables for NoSQL key-value data. Access tiers and redundancy options vary by account and workload.",
    example: "A Mama Mboga might record daily stock in a notebook; a cloud app could store those records digitally. In Azure, shared files, object blobs, and queues are different storage services with different purposes.",
    exam: "Choose storage by data type and access pattern. Redundancy choices affect availability and resilience; storage tier choices affect access and cost. Check service limits and current options.",
    simpleSw: "Azure Storage ina huduma kama Blob Storage ya object data, Azure Files ya file shares zinazosimamiwa, Queues za ujumbe na Tables za data ya NoSQL key-value. Access tiers na redundancy hutegemea account na workload.",
    exampleSw: "Kikundi cha jamii kinaweza kuhifadhi nyaraka za pamoja kwenye file share, picha kama blobs, na kutumia queue kupitisha kazi ndani ya programu.",
    examSw: "Chagua storage kulingana na aina ya data na jinsi itakavyotumika. Redundancy huathiri upatikanaji na resilience; storage tier huathiri ufikiaji na gharama. Angalia limits na chaguo za sasa."
  },
  {
    id: "identity-security",
    domain: "governance",
    icon: "⛨",
    title: "Identity, access & security",
    keywords: ["identity", "entra", "microsoft entra id", "authentication", "mfa", "passwordless", "conditional access", "rbac", "zero trust", "defender", "security", "utambulisho", "ruhusa", "uthibitishaji", "utambulisho na ufikiaji"],
    simple: "Microsoft Entra ID provides cloud identity and access capabilities. Authentication checks who you are; authorization determines what you can do. MFA adds another verification factor. Azure RBAC assigns permissions at a chosen scope. Zero Trust verifies explicitly and grants least-privilege access.",
    example: "At a SACCO, staff identity checks who you are, while your assigned role decides which records you may access. RBAC is like a controlled key list, but Azure scopes and permissions are more precise than physical keys.",
    exam: "Authentication is not authorization. RBAC controls access to Azure resources; Microsoft Entra ID manages identities. Apply least privilege and verify access appropriately.",
    simpleSw: "Microsoft Entra ID hutoa uwezo wa utambulisho na ufikiaji wa wingu. Authentication huthibitisha wewe ni nani; authorization huamua unachoweza kufanya. MFA huongeza uthibitisho mwingine. Azure RBAC hutoa ruhusa kwenye scope iliyochaguliwa. Zero Trust huthibitisha kila wakati na kutoa ruhusa chache zinazohitajika.",
    exampleSw: "Kwenye kliniki, kitambulisho cha mfanyakazi huthibitisha wewe ni nani, na nafasi yako huamua vyumba unavyoweza kuingia. MFA huongeza ukaguzi mwingine; RBAC hutoa ufikiaji kulingana na kazi.",
    examSw: "Authentication si authorization. RBAC hudhibiti ufikiaji wa Azure resources; Microsoft Entra ID husimamia identities. Tumia ruhusa chache zinazohitajika na uthibitishe ufikiaji."
  },
  {
    id: "cost-management",
    domain: "governance",
    icon: "◈",
    title: "Cost management",
    keywords: ["cost", "pricing calculator", "total cost", "capex", "opex", "tags", "budgets", "gharama", "bei", "gharama za wingu"],
    simple: "Azure costs can depend on resource type, region, usage, service tier, and licensing. The Azure Pricing Calculator estimates costs before deployment. Cost Management tools help analyze actual and forecast spending. Tags can help organize and report costs, but do not themselves change billing.",
    example: "A small shop can estimate rent and electricity before opening, then review monthly bills. Cloud teams can estimate planned services and monitor usage, but should verify prices and assumptions.",
    exam: "Cloud can shift spending toward operating expenses, but it is not automatically cheaper. Use estimates, budgets, and monitoring; a tag is metadata, not a cost limit.",
    simpleSw: "Gharama za Azure zinaweza kutegemea aina ya resource, region, matumizi, kiwango cha huduma na leseni. Azure Pricing Calculator hukadiria gharama kabla ya deployment. Cost Management husaidia kuchambua matumizi halisi na makadirio. Tags husaidia kupanga na kuripoti gharama lakini hazibadilishi bili zenyewe.",
    exampleSw: "Duka dogo linaweza kukadiria kodi na umeme kabla ya kufunguliwa, kisha kukagua bili za kila mwezi. Timu za wingu zinaweza kukadiria huduma na kufuatilia matumizi, lakini zikague bei na makisio.",
    examSw: "Wingu linaweza kuhamisha gharama kuwa OpEx, lakini si lazima liwe nafuu zaidi. Tumia makadirio, budgets na ufuatiliaji; tag ni metadata, si kikomo cha gharama."
  },
  {
    id: "governance-compliance",
    domain: "governance",
    icon: "▣",
    title: "Governance & compliance",
    keywords: ["governance", "compliance", "azure policy", "resource locks", "purview", "policy", "utawala", "sera"],
    simple: "Azure Policy evaluates resources against organizational rules and can audit or enforce supported requirements. Resource locks help prevent accidental deletion or modification. Microsoft Purview helps with data governance and compliance capabilities across supported data sources.",
    example: "A school can set a rule that every new classroom has a fire exit, then check each building. A lock is an extra safeguard against accidentally removing an important resource.",
    exam: "Policy enforces or audits rules; a lock protects a resource from certain operations. Neither replaces identity permissions or a complete security plan.",
    simpleSw: "Azure Policy hukagua resources dhidi ya sheria za shirika na inaweza kukagua au kutekeleza mahitaji yanayoungwa mkono. Resource locks husaidia kuzuia kufuta au kubadilisha kwa bahati mbaya. Microsoft Purview husaidia governance ya data na compliance kwenye vyanzo vinavyoungwa mkono.",
    exampleSw: "Shule inaweza kuweka sheria kwamba kila darasa jipya liwe na mlango wa dharura, kisha ikague majengo. Lock ni kinga ya ziada dhidi ya kufuta resource muhimu kwa bahati mbaya.",
    examSw: "Policy hukagua au kutekeleza sheria; lock hulinda resource dhidi ya baadhi ya vitendo. Hakuna mojawapo inayochukua nafasi ya ruhusa za identity au mpango kamili wa usalama."
  },
  {
    id: "management-tools",
    domain: "governance",
    icon: "⌘",
    title: "Manage & deploy resources",
    keywords: ["portal", "cloud shell", "cli", "powershell", "arm", "arm template", "infrastructure as code", "iac", "azure arc", "kusimamia", "miundombinu kama msimbo"],
    simple: "The Azure portal is a web interface for managing services. Azure CLI and Azure PowerShell support command-line management. Azure Resource Manager (ARM) is the deployment and management service; ARM templates describe infrastructure as code. Azure Cloud Shell provides browser-based command-line tools.",
    example: "A portal is like filling out a form by hand; a script is like a repeatable recipe. Infrastructure as code helps teams deploy consistent environments.",
    exam: "ARM is the management and deployment layer. ARM templates are declarative files describing resources; they are not the same thing as the portal.",
    simpleSw: "Azure portal ni kiolesura cha wavuti cha kusimamia huduma. Azure CLI na Azure PowerShell husaidia usimamizi kwa command line. Azure Resource Manager (ARM) ni huduma ya deployment na usimamizi; ARM templates hueleza miundombinu kama msimbo. Azure Cloud Shell hutoa command line kwenye kivinjari.",
    exampleSw: "Portal ni kama kujaza fomu mwenyewe; script ni kama kichocheo kinachoweza kurudiwa. Infrastructure as code husaidia timu kupeleka mazingira yanayofanana.",
    examSw: "ARM ni safu ya usimamizi na deployment. ARM templates ni faili za maelezo ya resources; si kitu kimoja na portal."
  },
  {
    id: "monitoring",
    domain: "governance",
    icon: "⌁",
    title: "Monitoring & service health",
    keywords: ["monitor", "monitoring", "azure monitor", "log analytics", "alerts", "application insights", "advisor", "service health", "ufuatiliaji", "tahadhari"],
    simple: "Azure Monitor collects and analyzes monitoring data. Log Analytics helps query log data; alerts notify you when conditions are met. Application Insights helps monitor application performance. Azure Service Health reports Azure service issues that may affect you; Azure Advisor provides recommendations.",
    example: "A matatu operator can check vehicle status, get an alert when something needs attention, and receive maintenance recommendations. Different tools answer different questions.",
    exam: "Azure Monitor is the broader monitoring service. Service Health is about Azure service events affecting your resources; Advisor offers best-practice recommendations.",
    simpleSw: "Azure Monitor hukusanya na kuchambua data ya ufuatiliaji. Log Analytics husaidia kuuliza data ya logs; alerts hukuarifu masharti yanapotimia. Application Insights husaidia kufuatilia utendaji wa programu. Azure Service Health huripoti matatizo ya huduma za Azure yanayoweza kukuathiri; Azure Advisor hutoa mapendekezo.",
    exampleSw: "Mwendeshaji wa matatu anaweza kuangalia hali ya gari, kupata tahadhari tatizo linapotokea, na kupokea mapendekezo ya matengenezo. Zana tofauti hujibu maswali tofauti.",
    examSw: "Azure Monitor ndiyo huduma pana ya ufuatiliaji. Service Health huhusu matukio ya huduma za Azure yanayoathiri resources zako; Advisor hutoa mapendekezo ya mbinu bora."
  }
];

const questions = [
  {
    topic: "CLOUD CONCEPTS",
    prompt: "Which statement best describes a consumption-based cloud model?",
    options: ["Pay for resources according to usage", "Buy every server before using a service", "Pay the same amount regardless of usage", "The cloud provider owns the customer's data"],
    answer: 0,
    explanation: "A consumption-based model charges according to the services and resources used, subject to their pricing rules.",
    promptSw: "Ni kauli ipi inayoeleza vizuri mfumo wa wingu unaotegemea matumizi?",
    optionsSw: ["Lipa kulingana na rasilimali zilizotumika", "Nunua kila seva kabla ya kutumia huduma", "Lipa kiasi kilekile bila kujali matumizi", "Mtoa huduma wa wingu ndiye mmiliki wa data ya mteja"],
    explanationSw: "Mfumo unaotegemea matumizi hutoza kulingana na huduma na rasilimali zilizotumika, kwa kufuata masharti ya bei."
  },
  {
    topic: "CLOUD CONCEPTS",
    prompt: "Which cloud model combines public cloud services with a private environment?",
    options: ["Public", "Private", "Hybrid", "Serverless"],
    answer: 2,
    explanation: "A hybrid cloud combines public and private cloud environments.",
    promptSw: "Ni aina gani ya wingu huunganisha huduma za public cloud na mazingira ya private?",
    optionsSw: ["Public", "Private", "Hybrid", "Serverless"],
    explanationSw: "Hybrid cloud huunganisha mazingira ya public na private cloud."
  },
  {
    topic: "CLOUD CONCEPTS",
    prompt: "Which service model usually gives the customer the most control over virtual infrastructure?",
    options: ["SaaS", "PaaS", "IaaS", "DNS"],
    answer: 2,
    explanation: "IaaS provides virtual infrastructure and generally gives the customer more control than PaaS or SaaS.",
    promptSw: "Ni aina gani ya huduma kwa kawaida humpa mteja udhibiti zaidi wa miundombinu pepe?",
    optionsSw: ["SaaS", "PaaS", "IaaS", "DNS"],
    explanationSw: "IaaS hutoa miundombinu pepe na kwa kawaida humpa mteja udhibiti zaidi kuliko PaaS au SaaS."
  },
  {
    topic: "AZURE ARCHITECTURE",
    prompt: "Which order correctly shows the Azure management hierarchy from broadest to most specific?",
    options: ["Resources → resource groups → subscriptions → management groups", "Management groups → subscriptions → resource groups → resources", "Subscriptions → management groups → resources → resource groups", "Resource groups → resources → management groups → subscriptions"],
    answer: 1,
    explanation: "Management groups can organize subscriptions; subscriptions contain resource groups, which contain resources.",
    promptSw: "Ni mpangilio upi sahihi wa Azure management hierarchy kutoka kiwango kikubwa hadi kidogo?",
    optionsSw: ["Resources → resource groups → subscriptions → management groups", "Management groups → subscriptions → resource groups → resources", "Subscriptions → management groups → resources → resource groups", "Resource groups → resources → management groups → subscriptions"],
    explanationSw: "Management groups hupanga subscriptions; subscriptions huwa na resource groups, ambazo huwa na resources."
  },
  {
    topic: "AZURE ARCHITECTURE",
    prompt: "What is an availability zone?",
    options: ["A billing scope containing many subscriptions", "A physically separate location within a supported Azure region", "A private cloud deployment model", "A type of Azure storage account"],
    answer: 1,
    explanation: "Availability zones are physically separate locations within a region that supports them.",
    promptSw: "Availability zone ni nini?",
    optionsSw: ["Kiwango cha bili chenye subscriptions nyingi", "Eneo tofauti la kimwili ndani ya Azure region inayoliunga mkono", "Aina ya private cloud", "Aina ya Azure storage account"],
    explanationSw: "Availability zones ni maeneo tofauti ya kimwili ndani ya region inayoyaunga mkono."
  },
  {
    topic: "AZURE ARCHITECTURE",
    prompt: "Which Azure service is designed for object storage such as images and other unstructured data?",
    options: ["Azure Blob Storage", "Azure Policy", "Azure VPN Gateway", "Microsoft Entra ID"],
    answer: 0,
    explanation: "Azure Blob Storage is designed for storing large amounts of unstructured object data.",
    promptSw: "Ni huduma gani ya Azure imeundwa kuhifadhi object data kama picha na data nyingine isiyo na muundo?",
    optionsSw: ["Azure Blob Storage", "Azure Policy", "Azure VPN Gateway", "Microsoft Entra ID"],
    explanationSw: "Azure Blob Storage imeundwa kuhifadhi kiasi kikubwa cha object data isiyo na muundo."
  },
  {
    topic: "SECURITY & GOVERNANCE",
    prompt: "What does Azure role-based access control (RBAC) help manage?",
    options: ["Azure resource permissions at a scope", "The physical location of datacenters", "The price of every Azure service", "The format of storage files"],
    answer: 0,
    explanation: "Azure RBAC assigns roles to identities at a scope to control access to Azure resources.",
    promptSw: "Azure role-based access control (RBAC) husaidia kusimamia nini?",
    optionsSw: ["Ruhusa za Azure resources kwenye scope fulani", "Mahali pa kimwili pa datacenters", "Bei ya kila huduma ya Azure", "Muundo wa faili za storage"],
    explanationSw: "Azure RBAC hutoa roles kwa identities kwenye scope ili kudhibiti ufikiaji wa Azure resources."
  },
  {
    topic: "SECURITY & GOVERNANCE",
    prompt: "Which tool can help audit or enforce organizational rules on Azure resources?",
    options: ["Azure Policy", "Azure Files", "Azure DNS", "Azure Functions"],
    answer: 0,
    explanation: "Azure Policy evaluates resources against rules and can audit or enforce supported requirements.",
    promptSw: "Ni zana gani inaweza kukagua au kutekeleza sheria za shirika kwenye Azure resources?",
    optionsSw: ["Azure Policy", "Azure Files", "Azure DNS", "Azure Functions"],
    explanationSw: "Azure Policy hukagua resources dhidi ya sheria na inaweza kukagua au kutekeleza mahitaji yanayoungwa mkono."
  },
  {
    topic: "MANAGEMENT & GOVERNANCE",
    prompt: "Which service provides recommendations to help improve Azure resource configuration?",
    options: ["Azure Advisor", "Azure Files", "Azure DNS", "Azure Virtual Network"],
    answer: 0,
    explanation: "Azure Advisor analyzes configurations and usage, then provides recommendations across supported areas.",
    promptSw: "Ni huduma gani hutoa mapendekezo ya kuboresha usanidi wa Azure resources?",
    optionsSw: ["Azure Advisor", "Azure Files", "Azure DNS", "Azure Virtual Network"],
    explanationSw: "Azure Advisor huchambua usanidi na matumizi, kisha hutoa mapendekezo kwenye maeneo yanayoungwa mkono."
  }
];

questions.push(
  {
    topic: "CLOUD CONCEPTS",
    prompt: "Which statement best describes elasticity in cloud computing?",
    options: ["Resources can adjust as demand changes", "A resource must stay at one fixed size", "Every workload automatically becomes highly available", "The customer stops managing its data"],
    answer: 0,
    explanation: "Elasticity emphasizes adjusting capacity as demand changes. Scaling still depends on how a workload is designed and configured.",
    promptSw: "Ni kauli ipi inaeleza vizuri elasticity kwenye cloud computing?",
    optionsSw: ["Rasilimali zinaweza kurekebishwa mahitaji yanapobadilika", "Resource lazima ibaki na ukubwa uleule", "Kila workload huwa highly available moja kwa moja", "Mteja huacha kusimamia data yake"],
    explanationSw: "Elasticity husisitiza kurekebisha uwezo mahitaji yanapobadilika. Scaling bado hutegemea usanifu na mipangilio ya workload."
  },
  {
    topic: "AZURE ARCHITECTURE",
    prompt: "What does a container typically package?",
    options: ["An application and its dependencies", "A complete geographic Azure region", "A billing boundary for subscriptions", "A user identity and its MFA methods"],
    answer: 0,
    explanation: "A container packages an application and its dependencies to support consistent deployment.",
    promptSw: "Container kwa kawaida hupackage nini?",
    optionsSw: ["Programu na dependencies zake", "Azure region nzima ya kijiografia", "Mpaka wa bili wa subscriptions", "Identity ya mtumiaji na njia za MFA"],
    explanationSw: "Container hupackage programu na dependencies zake ili kusaidia deployment yenye uthabiti."
  },
  {
    topic: "AZURE ARCHITECTURE",
    prompt: "What does a private endpoint use to connect privately to a supported Azure service?",
    options: ["A private IP address in a virtual network", "A public website address only", "A resource lock", "A management group"],
    answer: 0,
    explanation: "A private endpoint uses a private IP address in a virtual network to connect privately to a supported service.",
    promptSw: "Private endpoint hutumia nini kuunganisha kwa faragha na huduma ya Azure inayoungwa mkono?",
    optionsSw: ["IP address ya faragha ndani ya virtual network", "Anwani ya tovuti ya umma pekee", "Resource lock", "Management group"],
    explanationSw: "Private endpoint hutumia IP address ya faragha ndani ya virtual network kuunganisha kwa faragha na huduma inayoungwa mkono."
  },
  {
    topic: "MANAGEMENT & GOVERNANCE",
    prompt: "What do Azure resource tags primarily help organizations do?",
    options: ["Organize and report on resources and costs", "Automatically stop all spending", "Replace role-based access control", "Guarantee a resource is highly available"],
    answer: 0,
    explanation: "Tags are metadata that can help organize resources and analyze costs; they do not cap or automatically stop spending.",
    promptSw: "Azure resource tags husaidia mashirika kufanya nini hasa?",
    optionsSw: ["Kupanga na kuripoti resources na gharama", "Kusimamisha matumizi yote moja kwa moja", "Kuchukua nafasi ya RBAC", "Kuhakikisha resource inapatikana kila wakati"],
    explanationSw: "Tags ni metadata zinazoweza kusaidia kupanga resources na kuchambua gharama; hazipunguzi wala kusimamisha matumizi moja kwa moja."
  },
  {
    topic: "MANAGEMENT & GOVERNANCE",
    prompt: "What is the role of an Azure Resource Manager (ARM) template?",
    options: ["Describe Azure resources declaratively for deployment", "Estimate the price of every service with guaranteed accuracy", "Replace the Azure portal as an identity provider", "Store application images as object data"],
    answer: 0,
    explanation: "An ARM template is a declarative description of resources to deploy; Azure Resource Manager handles deployment and management.",
    promptSw: "Azure Resource Manager (ARM) template hufanya kazi gani?",
    optionsSw: ["Kueleza Azure resources kwa declarative deployment", "Kukadiria bei zote kwa usahihi uliohakikishwa", "Kuchukua nafasi ya Azure portal kama identity provider", "Kuhifadhi picha za programu kama object data"],
    explanationSw: "ARM template ni maelezo ya declarative ya resources za kupeleka; Azure Resource Manager husimamia deployment."
  },
  {
    topic: "CLOUD CONCEPTS",
    prompt: "When using cloud services, who remains responsible for their data and identities?",
    options: ["The customer", "The internet provider", "The Azure region", "Only the cloud provider"],
    answer: 0,
    explanation: "Customers retain responsibility for their data and identities across cloud service models.",
    promptSw: "Anapotumia huduma za wingu, nani huendelea kuwajibika kwa data na identities zake?",
    optionsSw: ["Mteja", "Mtoa huduma wa intaneti", "Azure region", "Mtoa huduma wa wingu pekee"],
    explanationSw: "Wateja huendelea kuwajibika kwa data na identities zao katika aina zote za cloud services."
  }
);

const quizDetails = [
  { conceptId: "cloud-computing", wrong: ["Buying hardware upfront is not the defining consumption-based model.", "Usage can change the bill; it is not necessarily fixed.", "The customer remains responsible for its data."] },
  { conceptId: "cloud-models", wrong: ["Public cloud alone does not combine public and private environments.", "Private cloud alone does not combine public and private environments.", "Serverless is a cloud service approach, not this deployment model."] },
  { conceptId: "service-types", wrong: ["SaaS is the ready-to-use application model and usually gives less infrastructure control.", "PaaS manages more of the platform for the customer.", "DNS is a naming service, not an IaaS/PaaS/SaaS service model."] },
  { conceptId: "azure-hierarchy", wrong: ["This order is reversed; resources are at the most specific scope.", "Subscriptions sit below management groups, not above them.", "Resource groups contain resources and sit below subscriptions."] },
  { conceptId: "regions-zones", wrong: ["A billing scope is not an availability zone.", "Private cloud is a deployment model, not a location within an Azure region.", "A storage account is a resource, not a zone."] },
  { conceptId: "storage", wrong: ["Azure Policy evaluates organizational rules.", "VPN Gateway provides network connectivity.", "Microsoft Entra ID provides identity capabilities."] },
  { conceptId: "identity-security", wrong: ["RBAC does not determine physical datacenter locations.", "RBAC does not set service prices.", "RBAC does not determine file formats."] },
  { conceptId: "governance-compliance", wrong: ["Azure Files provides managed file shares.", "Azure DNS provides DNS hosting and resolution capabilities.", "Azure Functions runs event-driven code."] },
  { conceptId: "monitoring", wrong: ["Azure Files provides managed file shares.", "Azure DNS provides DNS hosting and resolution capabilities.", "Virtual Network provides private network capabilities."] }
];

const shengNotes = {
  "cloud-computing": ["Cloud computing ni kutumia computing services kupitia internet ukiwahitaji, badala ya kununua na kusimamia kila server kivyako.", "Ni kama kutumia umeme wa KPLC bila kujenga power station kwako. Provider husimamia system; bill yako bado ina-derive kutoka usage na pricing.", "Kumbuka on-demand access, usage-based pricing, na serverless bado iko na servers zinasimamiwa na provider."],
  "cloud-models": ["Public cloud hushare provider infrastructure kati ya customers. Private cloud ni ya organisation moja; hybrid huconnect public na private environments.", "Biashara inaweza run website public Azure huku ikiweka system sensitive kwa private environment. Chaguo inategemea security, control, cost na operations.", "Public, private na hybrid ni deployment models. Hybrid ina-combine environments mbili."],
  "service-types": ["IaaS inakupatia virtual infrastructure u-configure; PaaS inamanage platform ya app; SaaS ni app iko ready kutumia. Provider hu-manage zaidi ukitoka IaaS kwenda SaaS.", "IaaS ni kama plot unajipangia, PaaS kiosk iko fitted, SaaS ni shop yenye bidhaa ready. Hii ni memory hook, si exact technical match.", "IaaS humpea customer control zaidi; kwa SaaS provider hu-manage sehemu mingi zaidi."],
  "shared-responsibility": ["Cloud security ni teamwork. Provider hulinda parts za infrastructure; customer bado anawajibika kwa data, identities na settings anacontrol.", "Landlord ana-maintain building; wewe unalock shop na kulinda stock. Kwa managed service provider anashika kazi zaidi za infrastructure.", "Customer bado anawajibika kwa data na identities. Responsibilities hubadilika kulingana na service model."],
  "cloud-benefits": ["Cloud inakusaidia kuongeza au kupunguza capacity kulingana na demand. Serverless inakuachia focus kwa code huku provider aki-manage servers.", "Matatu zinaweza ongezeka Friday jioni demand ikiwa juu. Hiyo ni example ya scaling tu; real workload si sawa kabisa na traffic.", "Scalability ni kubadilisha capacity; elasticity ni kurekebisha capacity demand ikibadilika. Cloud hai-guarantee reliability ama cheap cost yenyewe."],
  "azure-hierarchy": ["Azure resource ni service moja. Resource groups huorganise resources, subscriptions hutoa management na billing boundary, management groups hupanga subscriptions mingi.", "Ni kama system ya shule: management group hupanga subscriptions; hizo huwa na resource groups na resources zake.", "Order ni management groups → subscriptions → resource groups → resources."],
  "regions-zones": ["Region ni geographic area ya datacenters; availability zones ni physical locations tofauti ndani ya region inayosupport zones.", "Branches za Nairobi na Mombasa zina geographic separation; branches tofauti Nairobi ni mfano tu wa kuelewa zones.", "Region si zone. Zone support hutegemea region na service; check availability na design requirements."],
  "compute": ["Virtual machine ni computer virtual una-control zaidi; container hupackage app na dependencies; Functions hu-run code kwa events bila wewe ku-manage server infrastructure.", "VM ni room unapanga; container ni kit ume-pack unaweza move; function ni service inafanya task moja kitu fulani ikitokea.", "Chagua compute kulingana na control, portability, management na workload pattern."],
  "networking": ["VNet ni private network boundary ya Azure resources. Subnets hugawa network, peering huconnect VNets, VPN hutumia encrypted internet tunnel; ExpressRoute ni private connection kupitia provider.", "VNet ni private roads, subnet ni neighborhood, gateway ni controlled route kati ya networks.", "Public endpoint inafikiwa kupitia internet; private endpoint hutumia private IP kwa supported service."],
  "storage": ["Azure Storage iko na Blob za object data, Files za file shares, Queues za messages na Tables za NoSQL key-value data.", "Group inaweza weka picha kwa blobs, shared documents kwa file share, na queue ipitishe kazi kati ya parts za app.", "Chagua storage na redundancy kulingana na data, access pattern, availability na cost."],
  "identity-security": ["Authentication hucheck wewe ni nani; authorization huamua unaweza fanya nini. Entra ID husimamia cloud identity, RBAC hutoa permissions kwa Azure resources, MFA huongeza check ingine.", "Badge huonyesha wewe ni nani; role kazini huamua rooms unaingia. MFA inaongeza verification ingine.", "Authentication si authorization. Tumia least privilege na ujue identity gani inapata access gani."],
  "cost-management": ["Azure cost inategemea resource, region, usage na pricing. Calculator hukadiria; Cost Management husaidia kucheck actual na forecast spending.", "Kama shop unaestimate kodi na umeme, halafu ucheck bill kila mwezi. Tags husaidia kupanga report; hazilimit bill.", "Cloud haimaanishi cheap automatically. Tag ni metadata, si budget cap."],
  "governance-compliance": ["Azure Policy hu-audit au enforce rules. Resource lock husaidia kuzuia baadhi ya deletion ama changes. Purview husaidia data governance kwa sources zinasupport.", "Shule inaweka rule kila class iwe na emergency exit, halafu inacheck. Lock ni guard ya kuzuia resource muhimu ifutwe accident.", "Policy hucheck rules; lock hulinda dhidi ya operations fulani. Hakuna inaswap identity permissions."],
  "management-tools": ["Azure portal ni web interface; CLI na PowerShell ni command-line tools. ARM ni deployment na management service; ARM templates hueleza infrastructure kama code.", "Portal ni kujaza form mwenyewe; script ni recipe inaweza repeat. IaC husaidia deploy environments consistent.", "ARM ndiyo management layer; ARM template ni declarative description ya resources."],
  "monitoring": ["Azure Monitor hukusanya na kuchambua monitoring data. Alerts hutoa notification; Service Health huripoti Azure service issues; Advisor hutoa recommendations.", "Mwendeshaji wa matatu anaweza track gari, apate alert issue ikitokea, na apewe recommendation ya maintenance.", "Service Health ni service events zinaweza ku-affect resources zako; Advisor ni recommendations."]
};

const shengQuiz = [
  { prompt: "Ni statement gani inaeleza consumption-based cloud model fiti?", options: ["Lipa kulingana na usage ya resources", "Nunua kila server kabla ya kuanza", "Lipa fixed bila kujali usage", "Provider ndiye owner wa data"], explanation: "Model hulipisha kulingana na services na resources umetumia, kulingana na pricing rules." },
  { prompt: "Ni cloud model gani hucombine public na private environment?", options: ["Public", "Private", "Hybrid", "Serverless"], explanation: "Hybrid cloud huunganisha public na private environments." },
  { prompt: "Ni service model gani hukupatia control mingi kwa virtual infrastructure?", options: ["SaaS", "PaaS", "IaaS", "DNS"], explanation: "IaaS hukupatia customer control zaidi kuliko PaaS ama SaaS." },
  { prompt: "Ni order gani iko sawa kwa Azure management hierarchy, broad hadi specific?", options: ["Resources → resource groups → subscriptions → management groups", "Management groups → subscriptions → resource groups → resources", "Subscriptions → management groups → resources → resource groups", "Resource groups → resources → management groups → subscriptions"], explanation: "Management groups hupanga subscriptions, hizo huwa na resource groups, nazo huwa na resources." },
  { prompt: "Availability zone ni nini?", options: ["Billing scope ya subscriptions nyingi", "Physical location tofauti ndani ya Azure region inayosupport", "Private cloud model", "Azure storage account"], explanation: "Ni physical location tofauti ndani ya Azure region inayoisupport." },
  { prompt: "Ni Azure service gani hutumika kuhifadhi unstructured object data kama picha?", options: ["Azure Blob Storage", "Azure Policy", "Azure VPN Gateway", "Microsoft Entra ID"], explanation: "Azure Blob Storage imekusudiwa kuhifadhi object data mingi." },
  { prompt: "Azure RBAC husaidia manage nini?", options: ["Azure resource permissions kwa scope", "Mahali datacenter iko", "Bei ya kila Azure service", "Format ya storage files"], explanation: "Azure RBAC hutoa roles kwa identities ndani ya scope ili kudhibiti access kwa resources." },
  { prompt: "Ni tool gani inaweza audit ama enforce organizational rules kwa Azure resources?", options: ["Azure Policy", "Azure Files", "Azure DNS", "Azure Functions"], explanation: "Azure Policy hu-evaluate resources dhidi ya rules na inaweza audit au enforce supported requirements." },
  { prompt: "Ni service gani hutoa recommendations za kuboresha Azure configuration?", options: ["Azure Advisor", "Azure Files", "Azure DNS", "Azure Virtual Network"], explanation: "Azure Advisor huchambua configuration na usage, halafu hutoa recommendations." }
];

quizDetails.push(
  { conceptId: "cloud-benefits", wrong: ["Elasticity is about adapting capacity as demand changes.", "Cloud does not make every workload highly available automatically.", "Customers still manage their data."] },
  { conceptId: "compute", wrong: ["A region is a geographic area, not a container.", "A subscription is a management and billing scope.", "MFA is an identity verification method."] },
  { conceptId: "networking", wrong: ["A public address alone is not a private endpoint.", "A lock prevents certain operations; it is not a network connection.", "A management group organizes subscriptions."] },
  { conceptId: "cost-management", wrong: ["Tags help organize and report; budgets and alerts are separate cost controls.", "Tags do not replace RBAC permissions.", "Tags do not guarantee availability."] },
  { conceptId: "management-tools", wrong: ["The Pricing Calculator provides estimates, not guaranteed exact prices.", "ARM templates do not act as identity providers.", "Blob Storage is used for object data."] },
  { conceptId: "shared-responsibility", wrong: ["Internet providers do not take over the customer's data responsibilities.", "A region is a geographic location, not the data owner.", "Cloud responsibility is shared; it is not only the provider's."] }
);

shengQuiz.push(
  { prompt: "Elasticity kwa cloud ina-mean nini?", options: ["Resources zinaadjust demand ikichange", "Resource lazima ibaki fixed", "Kila workload inakuwa highly available automatically", "Customer anaacha kusimamia data"], explanation: "Elasticity ni kurekebisha capacity demand ikibadilika. Workload lazima iwe designed na configured fiti." },
  { prompt: "Container kawaida hupackage vitu gani?", options: ["App na dependencies zake", "Azure region nzima", "Billing boundary ya subscriptions", "Identity na MFA methods"], explanation: "Container hupackage app na dependencies zake ili deployment ikuwe consistent." },
  { prompt: "Private endpoint hutumia nini kuconnect privately kwa Azure service?", options: ["Private IP kwa virtual network", "Public web address pekee", "Resource lock", "Management group"], explanation: "Hutumia private IP ndani ya virtual network kwa service inasupport." },
  { prompt: "Azure resource tags husaidia nini?", options: ["Kuorganise na kuripoti resources na costs", "Kuzima spending automatically", "Kusubstitute RBAC", "Ku-guarantee availability"], explanation: "Tags ni metadata za kuorganise resources na kuchambua costs; hazizimi spending zenyewe." },
  { prompt: "ARM template hufanya nini?", options: ["Ku-describe resources kwa declarative deployment", "Ku-guarantee exact price", "Kusubstitute identity provider", "Kustore app images"], explanation: "Ni declarative description ya resources za ku-deploy; ARM husimamia deployment na management." },
  { prompt: "Kwa cloud services, nani bado anawajibika kwa data na identities zake?", options: ["Customer", "Internet provider", "Azure region", "Cloud provider pekee"], explanation: "Customer bado anawajibika kwa data na identities kwa cloud service models zote." }
);

const wrongOptionReasons = {
  sw: {
    "cloud-computing": ["Kununua vifaa mapema si maana kuu ya malipo kulingana na matumizi.", "Bili inaweza kubadilika kulingana na matumizi; si lazima iwe ileile.", "Mteja huendelea kuwajibika kwa data yake."],
    "cloud-models": ["Public cloud pekee haiunganishi public na private environments.", "Private cloud pekee haiunganishi public na private environments.", "Serverless ni njia ya kutoa huduma, si deployment model hii."],
    "service-types": ["SaaS ni programu iliyo tayari, hivyo kwa kawaida humpa mteja udhibiti mdogo wa miundombinu.", "PaaS husimamia sehemu kubwa zaidi ya platform kwa mteja.", "DNS ni huduma ya majina, si aina ya IaaS/PaaS/SaaS."],
    "azure-hierarchy": ["Mpangilio huu umepinduliwa; resources ziko kwenye kiwango maalum zaidi.", "Subscriptions ziko chini ya management groups, si juu yake.", "Resource groups zina resources na ziko chini ya subscriptions."],
    "regions-zones": ["Billing scope si availability zone.", "Private cloud ni deployment model, si location ndani ya Azure region.", "Storage account ni resource, si zone."],
    storage: ["Azure Policy hutathmini sheria za shirika.", "VPN Gateway hutoa muunganisho wa mtandao.", "Microsoft Entra ID hutoa uwezo wa identity."],
    "identity-security": ["RBAC haiamui mahali pa datacenter.", "RBAC haiweki bei za huduma.", "RBAC haiamui aina ya faili."],
    "governance-compliance": ["Azure Files hutoa file shares zinazosimamiwa.", "Azure DNS hutoa uwezo wa DNS.", "Azure Functions huendesha code kutokana na matukio."],
    monitoring: ["Azure Files hutoa file shares zinazosimamiwa.", "Azure DNS hutoa uwezo wa DNS.", "Virtual Network hutoa uwezo wa private networking."],
    "cloud-benefits": ["Elasticity huhusu kurekebisha capacity mahitaji yanapobadilika.", "Wingu halihakikishi high availability moja kwa moja.", "Wateja huendelea kusimamia data zao."],
    compute: ["Region ni eneo la kijiografia, si container.", "Subscription ni mpaka wa usimamizi na billing.", "MFA ni njia ya uthibitishaji wa identity."],
    networking: ["Public address pekee si private endpoint.", "Lock huzuia baadhi ya vitendo; si muunganisho wa network.", "Management group hupanga subscriptions."],
    "cost-management": ["Tags husaidia kupanga na kuripoti; budgets na alerts ni controls tofauti.", "Tags hazichukui nafasi ya ruhusa za RBAC.", "Tags hazihakikishi availability."],
    "management-tools": ["Pricing Calculator hutoa makadirio, si bei sahihi iliyohakikishwa.", "ARM templates si identity providers.", "Blob Storage hutumika kwa object data."],
    "shared-responsibility": ["Internet provider hachukui wajibu wa data ya mteja.", "Region ni eneo la kijiografia, si mmiliki wa data.", "Wajibu wa cloud hushirikishwa; si wa provider pekee."]
  },
  sheng: {
    "cloud-computing": ["Kununua hardware mapema si definition ya kulipa kulingana na usage.", "Bill inaweza change usage ikibadilika; si lazima ikuwe fixed.", "Customer bado anawajibika kwa data yake."],
    "cloud-models": ["Public cloud peke yake haicombine public na private.", "Private cloud peke yake haicombine public na private.", "Serverless ni service approach, si deployment model hii."],
    "service-types": ["SaaS ni app iko ready, kwa hivyo control ya infrastructure huwa kidogo.", "PaaS inamanage platform mingi zaidi kwa customer.", "DNS ni naming service, si service model ya IaaS/PaaS/SaaS."],
    "azure-hierarchy": ["Order hii imegeuzwa; resources ziko specific zaidi.", "Subscriptions ziko chini ya management groups, si juu yake.", "Resource groups hushika resources na ziko chini ya subscriptions."],
    "regions-zones": ["Billing scope si availability zone.", "Private cloud ni deployment model, si location ndani ya Azure region.", "Storage account ni resource, si zone."],
    storage: ["Azure Policy hucheck organizational rules.", "VPN Gateway hutoa network connection.", "Microsoft Entra ID hutoa identity features."],
    "identity-security": ["RBAC haiamui datacenter iko wapi.", "RBAC hai-set service prices.", "RBAC haiamui file format."],
    "governance-compliance": ["Azure Files hutoa managed file shares.", "Azure DNS hutoa DNS capabilities.", "Azure Functions hu-run code event ikitokea."],
    monitoring: ["Azure Files hutoa managed file shares.", "Azure DNS hutoa DNS capabilities.", "Virtual Network hutoa private network features."],
    "cloud-benefits": ["Elasticity ni kurekebisha capacity demand ikibadilika.", "Cloud hai-guarantee high availability yenyewe.", "Customers bado wanamanage data yao."],
    compute: ["Region ni geographic area, si container.", "Subscription ni management na billing boundary.", "MFA ni identity verification method."],
    networking: ["Public address peke yake si private endpoint.", "Lock huzuia actions fulani, si network connection.", "Management group huorganise subscriptions."],
    "cost-management": ["Tags huorganise na kuripoti; budgets na alerts ni cost controls ingine.", "Tags hazisubstitute RBAC permissions.", "Tags hazi-guarantee availability."],
    "management-tools": ["Pricing Calculator ni estimate, si guaranteed exact price.", "ARM templates si identity providers.", "Blob Storage ni ya object data."],
    "shared-responsibility": ["Internet provider hachukui responsibility ya customer data.", "Region ni geographic location, si data owner.", "Cloud responsibilities hushare; si provider pekee."]
  }
};

const copy = {
  en: {
    language: "English",
    languageButton: "Switch to Kiswahili",
    levels: {
      beginner: "Beginner",
      intermediate: "Intermediate",
      exam: "Exam-ready"
    },
    levelHint: {
      beginner: "Beginner mode · clear definitions, familiar examples, and a quick exam reminder.",
      intermediate: "Intermediate mode · connect Azure terms to the services and decisions they describe.",
      exam: "Exam-ready mode · focus on key terms, distinctions, and the public skills outline."
    },
    askPlaceholder: "Ask about an AZ-900 topic…",
    askButton: "Ask Buddy",
    capabilityConnected: "15 reviewed concepts · AI fallback configured",
    capabilityOffline: "15 reviewed concepts · AI fallback not configured",
    privacyNotice: "Reviewed notes answer supported concepts first. If configured, unmatched questions plus your selected language and study level are sent to the Study Buddy server and Anthropic. AI-generated answers may be wrong; verify them on Microsoft Learn. Don’t enter personal or confidential information.",
    aiLabel: "AI-generated · verify on Microsoft Learn",
    aiLoading: "Checking the AI tutor…",
    aiError: "The AI tutor is unavailable right now. Try one of the reviewed AZ-900 topics.",
    welcome: "Jambo! I can help make Azure concepts easier to picture. What are you curious about?",
    notFound: "I don’t have a reviewed note for that wording yet. Try one of these AZ-900 topics, or choose a card in the study library.",
    explanation: "In simple terms",
    example: "A familiar example",
    exam: "AZ-900 reminder",
    check: "Check your understanding",
    explainNew: "Explain like I’m new",
    explainFull: "Show full explanation",
    levelFocus: "Study focus",
    beginnerFocus: "Start with one clear idea; use the example to picture it.",
    intermediateFocus: "Connect the definition to the Azure service and its responsibility boundary.",
    examFocus: "Recall the key distinction and connect it to the published AZ-900 skills outline.",
    quickCheck: "Open a related original practice question",
    wrongOptions: "Why the other options are incorrect",
    weakEmpty: "Answer a few practice questions to get a personal revision list.",
    weakSummary: "missed",
    retryTopic: "Review this topic",
    explored: "Explored",
    askAbout: "Ask Study Buddy",
    noResults: "No matching concepts. Try another search.",
    next: "Next question",
    finish: "See your result",
    restart: "Try again",
    correct: "Correct!",
    incorrect: "Not quite.",
    correctCount: "correct",
    answeredNone: "No questions answered yet",
    answeredSome: "questions answered",
    complete: "Practice set complete!",
    resetDone: "Your local study progress has been reset.",
    resetCancel: "Reset cancelled.",
    resetConfirm: "Reset your Study Buddy progress on this device?",
    storageWarning: "Progress could not be saved in this browser."
  },
  sw: {
    language: "Kiswahili",
    languageButton: "Switch to English",
    levels: {
      beginner: "Mwanzo",
      intermediate: "Kati",
      exam: "Maandalizi ya mtihani"
    },
    levelHint: {
      beginner: "Kiwango cha mwanzo · fafanuzi wazi, mifano ya kawaida na kumbusho la mtihani.",
      intermediate: "Kiwango cha kati · unganisha istilahi za Azure na huduma na maamuzi yake.",
      exam: "Maandalizi ya mtihani · zingatia maneno muhimu, tofauti na muhtasari wa ujuzi."
    },
    askPlaceholder: "Uliza kuhusu mada ya AZ-900…",
    askButton: "Uliza Buddy",
    capabilityConnected: "Dhana 15 zilizokaguliwa · AI imewekwa",
    capabilityOffline: "Dhana 15 zilizokaguliwa · AI haijawekwa",
    privacyNotice: "Dokezo zilizokaguliwa hujibu dhana zinazoungwa mkono kwanza. AI ikiwa imewekwa, maswali yasiyolingana pamoja na lugha na kiwango cha masomo ulichoweka hutumwa kwa seva ya Study Buddy na Anthropic. Majibu ya AI yanaweza kuwa na makosa; yathibitishe kwenye Microsoft Learn. Usiweke taarifa binafsi au za siri.",
    aiLabel: "Jibu limetengenezwa na AI · thibitisha kwenye Microsoft Learn",
    aiLoading: "Inauliza mwalimu wa AI…",
    aiError: "Mwalimu wa AI hapatikani sasa. Jaribu mada ya AZ-900 iliyokaguliwa.",
    welcome: "Jambo! Ninaweza kusaidia kufanya dhana za Azure ziwe rahisi kuelewa. Ungependa kujua nini?",
    notFound: "Bado sina dokezo lililokaguliwa kwa swali hilo. Jaribu mada hizi za AZ-900 au chagua kadi kwenye maktaba ya masomo.",
    explanation: "Kwa maneno rahisi",
    example: "Mfano unaofahamika",
    exam: "Kumbusho la AZ-900",
    check: "Jipime uelewa wako",
    explainNew: "Nielezee kama ndio naanza",
    explainFull: "Onyesha maelezo yote",
    levelFocus: "Lengo la kujifunza",
    beginnerFocus: "Anza na wazo moja lililo wazi; tumia mfano kuliona akilini.",
    intermediateFocus: "Unganisha ufafanuzi na huduma ya Azure na mipaka ya majukumu.",
    examFocus: "Kumbuka tofauti muhimu na uiunganishe na mada za AZ-900.",
    quickCheck: "Fungua swali la mazoezi linalohusiana",
    wrongOptions: "Kwa nini machaguo mengine si sahihi",
    weakEmpty: "Jibu maswali machache ya mazoezi ili upate orodha yako ya kurudia.",
    weakSummary: "yamekosewa",
    retryTopic: "Rudia mada hii",
    explored: "Umejifunza",
    askAbout: "Uliza Study Buddy",
    noResults: "Hakuna dhana zinazolingana. Jaribu kutafuta tena.",
    next: "Swali linalofuata",
    finish: "Ona matokeo yako",
    restart: "Jaribu tena",
    correct: "Sahihi!",
    incorrect: "Bado.",
    correctCount: "sahihi",
    answeredNone: "Bado hujajibu swali",
    answeredSome: "maswali yamejibiwa",
    complete: "Maswali yamekamilika!",
    resetDone: "Maendeleo yako ya masomo kwenye kifaa hiki yamefutwa.",
    resetCancel: "Kufuta kumeghairiwa.",
    resetConfirm: "Ufute maendeleo ya Study Buddy kwenye kifaa hiki?",
    storageWarning: "Maendeleo hayakuweza kuhifadhiwa kwenye kivinjari hiki."
  },
  sheng: {
    language: "Sheng (beta)",
    languageButton: "Switch to English",
    levels: {
      beginner: "Mwanzo",
      intermediate: "Kati",
      exam: "Exam-ready"
    },
    levelHint: {
      beginner: "Mwanzo mode · definition clear, example ya home, na exam reminder fiti.",
      intermediate: "Kati mode · connect Azure terms na services na decisions zake.",
      exam: "Exam-ready mode · focus ni key terms, differences na public skills outline."
    },
    askPlaceholder: "Uliza kuhusu AZ-900…",
    askButton: "Uliza Buddy",
    capabilityConnected: "Dhana 15 zimecheckiwa · AI imewekwa",
    capabilityOffline: "Dhana 15 zimecheckiwa · AI haijawekwa",
    privacyNotice: "Notes zilizokaguliwa hujibu concepts zinazojulikana kwanza. AI ikiwa imewekwa, maswali zingine plus language na study level uliyochagua hutumwa kwa server ya Study Buddy na Anthropic. Majibu ya AI zinaweza kuwa wrong; verify kwa Microsoft Learn. Usiweke personal ama confidential info.",
    aiLabel: "AI-generated · verify kwa Microsoft Learn",
    aiLoading: "Nacheki na AI tutor…",
    aiError: "AI tutor haipatikani sai. Jaribu topic ya AZ-900 imecheckiwa.",
    welcome: "Niaje! Naweza kusaidia concepts za Azure zikae clear. Unataka kujua gani?",
    notFound: "Sina note verified ya hilo bado. Jaribu topic ya AZ-900 au uchague card kwa library.",
    explanation: "Maana yake",
    example: "Mfano ya huku",
    exam: "AZ-900 tip",
    check: "Jipime kidogo",
    explainNew: "Explain kama unaanza",
    explainFull: "Show full explanation",
    levelFocus: "Study focus",
    beginnerFocus: "Anza na idea moja clear; tumia mfano kuipicture.",
    intermediateFocus: "Connect definition na Azure service na responsibility boundary.",
    examFocus: "Kumbuka key difference na connect na public AZ-900 skills outline.",
    quickCheck: "Fungua practice question inahusiana",
    wrongOptions: "Mbona options ingine si correct",
    weakEmpty: "Jibu quiz questions kadhaa upate topic za kurevise.",
    weakSummary: "zimekosewa",
    retryTopic: "Rudia hii topic",
    askAbout: "Uliza Study Buddy",
    noResults: "Hakuna concept ime-match. Search tena.",
    next: "Next question",
    finish: "Ona results",
    restart: "Try tena",
    correct: "Sawa kabisa!",
    incorrect: "Bado kidogo.",
    correctCount: "correct",
    answeredNone: "Bado hakuna swali umejibu",
    answeredSome: "maswali umejibu",
    complete: "Quiz imeisha!",
    resetDone: "Progress ya Study Buddy kwa device hii imefutwa.",
    resetCancel: "Reset imecancel.",
    resetConfirm: "Ufute progress ya Study Buddy kwa device hii?",
    storageWarning: "Progress haikuweza kusave kwa browser hii."
  }
};

const storageKey = "studybuddy-az900-v1";
const apiBaseUrl = typeof window.STUDY_BUDDY_API_URL === "string"
  ? window.STUDY_BUDDY_API_URL.trim().replace(/\/+$/, "")
  : "";
const dom = {
  languageSelect: document.querySelector("#language-select"),
  levelSelect: document.querySelector("#learner-level"),
  chatLanguage: document.querySelector("#chat-language"),
  capability: document.querySelector("#buddy-capability"),
  privacyNote: document.querySelector("#privacy-note"),
  askForm: document.querySelector("#ask-form"),
  questionInput: document.querySelector("#question-input"),
  chatLog: document.querySelector("#chat-log"),
  topicGrid: document.querySelector("#topic-grid"),
  topicSearch: document.querySelector("#topic-search"),
  filterButtons: [...document.querySelectorAll(".filter-button")],
  emptyState: document.querySelector("#empty-state"),
  quizContent: document.querySelector("#quiz-content"),
  toast: document.querySelector("#toast"),
  weakTopics: document.querySelector("#weak-topics")
};

function loadProgress() {
  try {
    const stored = JSON.parse(localStorage.getItem(storageKey) || "{}");
    const validLevels = ["beginner", "intermediate", "exam"];
    const validLanguages = ["en", "sw", "sheng"];
    const savedWeaknesses = stored.weaknesses && typeof stored.weaknesses === "object" ? stored.weaknesses : {};
    return {
      viewed: Array.isArray(stored.viewed) ? stored.viewed.filter(id => topics.some(topic => topic.id === id)) : [],
      correct: Number.isInteger(stored.correct) && stored.correct >= 0 ? stored.correct : 0,
      answered: Number.isInteger(stored.answered) && stored.answered >= 0 ? stored.answered : 0,
      language: validLanguages.includes(stored.language) ? stored.language : "en",
      level: validLevels.includes(stored.level) ? stored.level : "beginner",
      weaknesses: Object.fromEntries(quizDetails.map(({ conceptId }) => {
        const record = savedWeaknesses[conceptId];
        return [conceptId, {
          attempts: Number.isInteger(record?.attempts) && record.attempts > 0 ? record.attempts : 0,
          missed: Number.isInteger(record?.missed) && record.missed > 0 ? record.missed : 0
        }];
      }))
    };
  } catch (error) {
    window.setTimeout(() => showToast(copy.en.storageWarning), 0);
    return { viewed: [], correct: 0, answered: 0, language: "en", level: "beginner", weaknesses: {} };
  }
}

const saved = loadProgress();
const state = {
  language: saved.language,
  level: saved.level,
  viewed: new Set(saved.viewed),
  correct: saved.correct,
  answered: saved.answered,
  weaknesses: saved.weaknesses,
  filter: "all",
  search: "",
  lastQuestion: "",
  lastAnswer: null,
  answerRequestId: 0,
  quizIndex: 0,
  quizSelection: null,
  quizComplete: false,
  simpleMode: false,
  simpleModeTopic: null
};

function currentCopy() {
  return copy[state.language];
}

function persistProgress() {
  try {
    localStorage.setItem(storageKey, JSON.stringify({
      language: state.language,
      level: state.level,
      viewed: [...state.viewed],
      correct: state.correct,
      answered: state.answered,
      weaknesses: state.weaknesses
    }));
  } catch (error) {
    showToast(currentCopy().storageWarning);
  }
}

function showToast(message) {
  if (!dom.toast) return;
  dom.toast.textContent = message;
  dom.toast.classList.add("visible");
  window.clearTimeout(showToast.timeout);
  showToast.timeout = window.setTimeout(() => dom.toast.classList.remove("visible"), 2600);
}

function makeElement(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;
  return element;
}

function updateProgress() {
  const count = state.viewed.size;
  const percentage = Math.round((count / topics.length) * 100);
  document.querySelector("#hero-topics-count").textContent = `${count} / ${topics.length}`;
  document.querySelector("#hero-progress-fill").style.width = `${percentage}%`;
  document.querySelector("#quiz-score").textContent = `${state.correct} ${currentCopy().correctCount}`;
  document.querySelector("#quiz-answered").textContent = state.answered === 0
    ? currentCopy().answeredNone
    : `${state.answered} ${currentCopy().answeredSome}`;
  document.querySelector("#level-hint").textContent = currentCopy().levelHint[state.level];
  [...dom.levelSelect.options].forEach(option => {
    option.textContent = currentCopy().levels[option.value];
  });
  renderWeakTopics();
}

function topicText(topic, field) {
  if (state.language === "sheng") {
    const noteIndex = { simple: 0, example: 1, exam: 2 }[field];
    return shengNotes[topic.id][noteIndex];
  }
  const suffix = state.language === "sw" ? "Sw" : "";
  return topic[`${field}${suffix}`];
}

function renderWeakTopics() {
  const weak = Object.entries(state.weaknesses)
    .filter(([, record]) => record.attempts > 0 && record.missed > 0)
    .sort((first, second) => {
      const firstRate = first[1].missed / first[1].attempts;
      const secondRate = second[1].missed / second[1].attempts;
      return secondRate - firstRate || second[1].missed - first[1].missed;
    })
    .slice(0, 3);
  dom.weakTopics.replaceChildren();
  if (weak.length === 0) {
    dom.weakTopics.append(makeElement("p", "weak-empty", currentCopy().weakEmpty));
    return;
  }
  for (const [conceptId, record] of weak) {
    const topic = topics.find(item => item.id === conceptId);
    const questionIndex = quizDetails.findIndex(item => item.conceptId === conceptId);
    if (!topic || questionIndex < 0) continue;
    const item = makeElement("article", "weak-topic");
    item.append(makeElement("span", "weak-icon", topic.icon));
    const details = makeElement("div", "weak-copy");
    details.append(makeElement("strong", "", topic.title));
    details.append(makeElement("span", "", `${record.missed} ${currentCopy().weakSummary} · ${record.attempts} ${currentCopy().answeredSome}`));
    item.append(details);
    const button = makeElement("button", "weak-review", currentCopy().retryTopic);
    button.type = "button";
    button.dataset.quizIndex = String(questionIndex);
    item.append(button);
    dom.weakTopics.append(item);
  }
}

function renderTopics() {
  const visibleTopics = topics.filter(topic => {
    const domainMatch = state.filter === "all" || topic.domain === state.filter;
    const query = state.search.trim().toLowerCase();
    const searchableText = `${topic.title} ${topic.keywords.join(" ")}`.toLowerCase();
    const searchMatch = !query || query.split(/\s+/).every(word => searchableText.includes(word));
    return domainMatch && searchMatch;
  });
  dom.topicGrid.replaceChildren();

  for (const topic of visibleTopics) {
    const card = makeElement("article", `topic-card domain-${topic.domain}`);
    const top = makeElement("div", "topic-card-top");
    top.append(makeElement("span", "topic-icon", topic.icon));
    top.append(makeElement("span", "topic-domain", topic.domain === "cloud" ? "CLOUD CONCEPTS" : topic.domain === "architecture" ? "AZURE ARCHITECTURE" : "MANAGEMENT & GOVERNANCE"));
    if (state.viewed.has(topic.id)) top.append(makeElement("span", "topic-done", "✓"));
    card.append(top);
    card.append(makeElement("h3", "", topic.title));
    card.append(makeElement("p", "", topicText(topic, "simple")));
    const button = makeElement("button", "topic-link", currentCopy().askAbout);
    button.type = "button";
    button.dataset.topicId = topic.id;
    button.append(makeElement("span", "", "→"));
    card.append(button);
    dom.topicGrid.append(card);
  }
  dom.emptyState.hidden = visibleTopics.length > 0;
  dom.topicGrid.hidden = visibleTopics.length === 0;
}

function appendChatMessage(kind, text) {
  const message = makeElement("div", `chat-message ${kind}`);
  if (kind === "buddy-message") message.append(makeElement("span", "message-avatar", "✳"));
  const bubble = makeElement("div", "message-bubble", text);
  message.append(bubble);
  dom.chatLog.append(message);
  dom.chatLog.scrollTop = dom.chatLog.scrollHeight;
  return message;
}

function localizedQuestion(index) {
  const question = questions[index];
  if (state.language === "sheng") return shengQuiz[index].prompt;
  return state.language === "sw" ? question.promptSw : question.prompt;
}

function createAnswerBlock(topic) {
  const answer = makeElement("article", "answer-card");
  answer.append(makeElement("h3", "", `${topic.icon} ${topic.title}`));
  const levelCopy = currentCopy();
  const definition = topicText(topic, "simple");
  const simpleDefinition = definition.split(/(?<=[.!?])\s+/u, 1)[0];
  const isSimplified = state.simpleMode && state.simpleModeTopic === topic.id;
  const sections = [
    [levelCopy.explanation, isSimplified || state.level === "beginner" ? simpleDefinition : definition],
    [levelCopy.example, topicText(topic, "example")],
    [levelCopy.exam, topicText(topic, "exam")]
  ];
  for (const [label, body] of sections) {
    const section = makeElement("div", "answer-section");
    section.append(makeElement("strong", "", label));
    section.append(makeElement("p", "", body));
    answer.append(section);
  }
  const focusLabel = makeElement("strong", "answer-focus-label", levelCopy.levelFocus);
  const focus = makeElement("p", "answer-focus", levelCopy[`${state.level}Focus`]);
  const focusSection = makeElement("div", "answer-section answer-level-focus");
  focusSection.append(focusLabel, focus);
  answer.append(focusSection);

  const explainButton = makeElement("button", "explain-new-button", isSimplified ? levelCopy.explainFull : levelCopy.explainNew);
  explainButton.type = "button";
  explainButton.setAttribute("aria-pressed", String(isSimplified));
  explainButton.addEventListener("click", () => {
    state.simpleMode = !isSimplified;
    state.simpleModeTopic = topic.id;
    renderLastAnswer();
  });
  answer.append(explainButton);

  const matchingQuestion = quizDetails.findIndex(item => item.conceptId === topic.id);
  const check = makeElement("div", "answer-check");
  check.append(makeElement("strong", "", levelCopy.check));
  check.append(makeElement("p", "answer-check-prompt", localizedQuestion(matchingQuestion)));
  const checkLink = makeElement("button", "answer-check-link", levelCopy.quickCheck);
  checkLink.type = "button";
  checkLink.dataset.quizIndex = String(matchingQuestion >= 0 ? matchingQuestion : 0);
  checkLink.addEventListener("click", () => startRelatedQuiz(Number(checkLink.dataset.quizIndex)));
  check.append(checkLink);
  answer.append(check);
  return answer;
}

function findTopic(question) {
  const normalized = question.toLowerCase().replace(/[^\p{L}\p{N}\s-]/gu, " ");
  let best = null;
  let bestScore = 0;
  for (const topic of topics) {
    let score = 0;
    for (const keyword of topic.keywords) {
      if (normalized.includes(keyword)) score += keyword.includes(" ") ? 3 : 2;
    }
    for (const word of topic.title.toLowerCase().split(/\s+/)) {
      if (word.length > 3 && normalized.includes(word)) score += 1;
    }
    if (score > bestScore) {
      best = topic;
      bestScore = score;
    }
  }
  return best;
}

function answerQuestion(question) {
  const trimmed = question.trim();
  if (!trimmed) return;
  state.lastQuestion = trimmed;
  state.lastAnswer = null;
  const requestId = ++state.answerRequestId;
  state.simpleMode = false;
  state.simpleModeTopic = null;
  appendChatMessage("learner-message", trimmed);
  const topic = findTopic(trimmed);
  if (topic) {
    state.lastAnswer = { type: "topic", topicId: topic.id };
    state.viewed.add(topic.id);
    renderLastAnswer();
    updateProgress();
    renderTopics();
    persistProgress();
    return;
  }

  if (!apiBaseUrl) {
    state.lastAnswer = { type: "not-found" };
    renderLastAnswer();
    return;
  }

  state.lastAnswer = { type: "loading" };
  renderLastAnswer();
  fetch(`${apiBaseUrl}/chat`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      question: trimmed,
      language: state.language,
      level: state.level
    })
  })
    .then(async response => {
      let payload;
      try {
        payload = await response.json();
      } catch (error) {
        if (error instanceof SyntaxError) {
          throw new Error("The AI service returned an unreadable response.");
        }
        throw error;
      }
      if (!response.ok) {
        throw new Error(typeof payload.detail === "string" ? payload.detail : currentCopy().aiError);
      }
      if (typeof payload.answer !== "string" || !payload.answer.trim()) {
        throw new Error("The AI service returned an empty answer.");
      }
      if (requestId === state.answerRequestId) {
        state.lastAnswer = { type: "ai", answer: payload.answer.trim() };
      }
    })
    .catch(error => {
      const message = error instanceof TypeError
        ? currentCopy().aiError
        : error.message || currentCopy().aiError;
      if (requestId === state.answerRequestId) {
        state.lastAnswer = { type: "error", message };
      }
    })
    .finally(() => {
      if (requestId === state.answerRequestId) renderLastAnswer();
    });
}

function renderLastAnswer() {
  dom.chatLog.querySelectorAll(
    ".buddy-message[data-answer-for], .buddy-message[data-not-found], .buddy-message[data-ai-answer], .buddy-message[data-ai-error], .buddy-message[data-ai-loading]"
  ).forEach(message => message.remove());
  if (!state.lastAnswer) return;
  if (state.lastAnswer.type === "topic") {
    const topic = topics.find(item => item.id === state.lastAnswer.topicId);
    if (!topic) return;
    const wrapper = makeElement("div", "chat-message buddy-message");
    wrapper.dataset.answerFor = topic.id;
    wrapper.append(makeElement("span", "message-avatar", "✳"));
    wrapper.append(createAnswerBlock(topic));
    dom.chatLog.append(wrapper);
    dom.chatLog.scrollTop = dom.chatLog.scrollHeight;
    return;
  }
  if (state.lastAnswer.type === "not-found") {
    const notFound = appendChatMessage("buddy-message", currentCopy().notFound);
    notFound.dataset.notFound = "true";
    return;
  }
  const wrapper = makeElement("div", "chat-message buddy-message");
  wrapper.dataset.aiAnswer = "true";
  wrapper.append(makeElement("span", "message-avatar", "✳"));
  const bubble = makeElement("div", "message-bubble ai-answer");
  if (state.lastAnswer.type === "loading") {
    wrapper.dataset.aiLoading = "true";
    bubble.textContent = currentCopy().aiLoading;
  } else if (state.lastAnswer.type === "error") {
    wrapper.dataset.aiError = "true";
    bubble.append(makeElement("p", "ai-answer-text", state.lastAnswer.message));
  } else {
    bubble.append(
      makeElement("strong", "ai-generated-label", currentCopy().aiLabel),
      makeElement("p", "ai-answer-text", state.lastAnswer.answer)
    );
  }
  wrapper.append(bubble);
  dom.chatLog.append(wrapper);
  dom.chatLog.scrollTop = dom.chatLog.scrollHeight;
}

function applyLanguage() {
  const text = currentCopy();
  document.documentElement.lang = state.language === "en" ? "en" : "sw";
  dom.languageSelect.value = state.language;
  dom.levelSelect.value = state.level;
  dom.questionInput.placeholder = text.askPlaceholder;
  dom.askForm.querySelector("button").firstChild.textContent = `${text.askButton} `;
  dom.chatLanguage.textContent = text.language;
  dom.capability.textContent = apiBaseUrl ? text.capabilityConnected : text.capabilityOffline;
  const privacyIcon = dom.privacyNote.querySelector("span");
  dom.privacyNote.replaceChildren(privacyIcon, document.createTextNode(text.privacyNotice));
  document.querySelector("#level-hint").textContent = text.levelHint[state.level];
  dom.emptyState.textContent = text.noResults;
  document.querySelector("#next-question").firstChild.textContent = `${state.quizComplete ? text.restart : state.quizIndex === questions.length - 1 ? text.finish : text.next} `;
  updateProgress();
  renderTopics();
  renderQuiz();
  if (state.lastQuestion) {
    renderLastAnswer();
  } else {
    const welcome = dom.chatLog.querySelector(".chat-welcome p");
    if (welcome) welcome.textContent = text.welcome;
  }
}

function renderQuiz() {
  const text = currentCopy();
  const nextButton = document.querySelector("#next-question");
  const feedback = document.querySelector("#answer-feedback");
  const progress = document.querySelector("#quiz-progress");
  if (state.quizComplete) {
    document.querySelector("#question-number").textContent = text.complete.toUpperCase();
    progress.style.width = "100%";
    dom.quizContent.replaceChildren(makeElement("p", "quiz-complete-message", `${text.complete} ${state.correct} ${text.correctCount}.`));
    feedback.textContent = "";
    nextButton.disabled = false;
    nextButton.firstChild.textContent = `${text.restart} `;
    return;
  }

  const question = questions[state.quizIndex];
  const prompt = state.language === "sheng"
    ? shengQuiz[state.quizIndex].prompt
    : state.language === "sw" ? question.promptSw : question.prompt;
  const options = state.language === "sheng"
    ? shengQuiz[state.quizIndex].options
    : state.language === "sw" ? question.optionsSw : question.options;
  document.querySelector("#question-number").textContent = `${state.language === "sw" ? "SWALI" : "QUESTION"} ${state.quizIndex + 1} ${state.language === "sw" ? "KATI YA" : "OF"} ${questions.length}`;
  progress.style.width = `${((state.quizIndex + 1) / questions.length) * 100}%`;
  dom.quizContent.replaceChildren(makeElement("p", "quiz-topic", question.topic));
  dom.quizContent.append(makeElement("h3", "quiz-prompt", prompt));
  const choices = makeElement("div", "quiz-options");
  options.forEach((option, index) => {
    const button = makeElement("button", "quiz-option");
    button.type = "button";
    button.textContent = option;
    button.disabled = state.quizSelection !== null;
    if (state.quizSelection === index) button.classList.add(index === question.answer ? "is-correct" : "is-incorrect");
    else if (state.quizSelection !== null && index === question.answer) button.classList.add("is-correct");
    button.addEventListener("click", () => selectAnswer(index));
    choices.append(button);
  });
  dom.quizContent.append(choices);

  if (state.quizSelection === null) feedback.textContent = "";
  else {
    const explanation = state.language === "sheng"
      ? shengQuiz[state.quizIndex].explanation
      : state.language === "sw" ? question.explanationSw : question.explanation;
    feedback.textContent = `${state.quizSelection === question.answer ? text.correct : text.incorrect} ${explanation}`;
    const details = makeElement("details", "wrong-answer-details");
    details.append(makeElement("summary", "", text.wrongOptions));
    const reasons = makeElement("ul", "wrong-answer-list");
    const detail = quizDetails[state.quizIndex];
    const wrongReasons = wrongOptionReasons[state.language]?.[detail.conceptId] ?? detail.wrong;
    let wrongIndex = 0;
    question.options.forEach((option, index) => {
      if (index === question.answer) return;
      const item = makeElement("li", "", `${option}: ${wrongReasons[wrongIndex]}`);
      wrongIndex += 1;
      reasons.append(item);
    });
    details.append(reasons);
    dom.quizContent.append(details);
  }
  nextButton.disabled = state.quizSelection === null;
  nextButton.firstChild.textContent = `${state.quizIndex === questions.length - 1 ? text.finish : text.next} `;
}

function selectAnswer(index) {
  if (state.quizSelection !== null) return;
  state.quizSelection = index;
  state.answered += 1;
  const correct = index === questions[state.quizIndex].answer;
  const conceptId = quizDetails[state.quizIndex].conceptId;
  state.weaknesses[conceptId].attempts += 1;
  if (correct) state.correct += 1;
  else state.weaknesses[conceptId].missed += 1;
  renderQuiz();
  updateProgress();
  persistProgress();
}

function showTopicInBuddy(topicId) {
  const topic = topics.find(item => item.id === topicId);
  if (!topic) return;
  const question = state.language === "en" ? `Explain ${topic.title}` : `Nielezee ${topic.title}`;
  answerQuestion(question);
  document.querySelector("#buddy").scrollIntoView({ behavior: "smooth", block: "start" });
}

function startRelatedQuiz(index) {
  if (!Number.isInteger(index) || index < 0 || index >= questions.length) return;
  state.quizIndex = index;
  state.quizSelection = null;
  state.quizComplete = false;
  renderQuiz();
  document.querySelector("#practice").scrollIntoView({ behavior: "smooth", block: "start" });
}

dom.askForm.addEventListener("submit", event => {
  event.preventDefault();
  const question = dom.questionInput.value;
  answerQuestion(question);
  dom.questionInput.value = "";
  dom.questionInput.focus();
});

document.querySelectorAll("[data-question]").forEach(button => {
  button.addEventListener("click", () => {
    const question = button.dataset.question;
    dom.questionInput.value = question;
    answerQuestion(question);
    dom.questionInput.value = "";
  });
});

dom.topicGrid.addEventListener("click", event => {
  const button = event.target.closest("[data-topic-id]");
  if (button) showTopicInBuddy(button.dataset.topicId);
});

dom.topicSearch.addEventListener("input", () => {
  state.search = dom.topicSearch.value;
  renderTopics();
});

dom.filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    state.filter = button.dataset.filter;
    dom.filterButtons.forEach(filterButton => {
      const selected = filterButton === button;
      filterButton.classList.toggle("active", selected);
      filterButton.setAttribute("aria-pressed", String(selected));
    });
    renderTopics();
  });
});

dom.languageSelect.addEventListener("change", () => {
  state.language = ["en", "sw", "sheng"].includes(dom.languageSelect.value) ? dom.languageSelect.value : "en";
  persistProgress();
  applyLanguage();
});

dom.levelSelect.addEventListener("change", () => {
  state.level = ["beginner", "intermediate", "exam"].includes(dom.levelSelect.value) ? dom.levelSelect.value : "beginner";
  state.simpleMode = false;
  state.simpleModeTopic = null;
  persistProgress();
  applyLanguage();
});

dom.weakTopics.addEventListener("click", event => {
  const button = event.target.closest("[data-quiz-index]");
  if (button) startRelatedQuiz(Number(button.dataset.quizIndex));
});

document.querySelector("#next-question").addEventListener("click", () => {
  if (state.quizComplete) {
    state.quizIndex = 0;
    state.quizSelection = null;
    state.quizComplete = false;
  } else if (state.quizSelection !== null) {
    if (state.quizIndex === questions.length - 1) state.quizComplete = true;
    else {
      state.quizIndex += 1;
      state.quizSelection = null;
    }
  }
  renderQuiz();
});

document.querySelector("#reset-progress").addEventListener("click", () => {
  if (!window.confirm(currentCopy().resetConfirm)) {
    showToast(currentCopy().resetCancel);
    return;
  }
  state.viewed.clear();
  state.correct = 0;
  state.answered = 0;
  state.weaknesses = Object.fromEntries(quizDetails.map(({ conceptId }) => [conceptId, { attempts: 0, missed: 0 }]));
  state.quizIndex = 0;
  state.quizSelection = null;
  state.quizComplete = false;
  state.lastQuestion = "";
  state.lastAnswer = null;
  state.answerRequestId += 1;
  state.simpleMode = false;
  state.simpleModeTopic = null;
  const welcome = makeElement("div", "chat-welcome");
  welcome.append(makeElement("span", "welcome-spark", "✦"));
  welcome.append(makeElement("p", "", currentCopy().welcome));
  dom.chatLog.replaceChildren(welcome);
  persistProgress();
  updateProgress();
  renderTopics();
  renderQuiz();
  showToast(currentCopy().resetDone);
});

const menuToggle = document.querySelector("#menu-toggle");
const siteNav = document.querySelector("#site-nav");
menuToggle.addEventListener("click", () => {
  const expanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!expanded));
  menuToggle.setAttribute("aria-label", expanded ? "Open navigation" : "Close navigation");
  siteNav.classList.toggle("is-open", !expanded);
});

siteNav.addEventListener("click", event => {
  if (event.target.closest("a")) {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
    siteNav.classList.remove("is-open");
  }
});

applyLanguage();
