const topics = [
  {
    id: "cloud-computing", domain: "cloud", icon: "☁", title: "Cloud computing",
    keywords: ["cloud computing", "cloud", "consumption based", "pay as you go", "serverless", "wingu"],
    en: {
      simple: "Cloud computing means getting computing services over the internet when you need them instead of buying and maintaining every server yourself. Services may be billed according to use and their pricing rules.",
      example: "Like using electricity from the grid instead of building a power station: you use a shared service without owning the infrastructure. Your bill still depends on what you use.",
      exam: "Know on-demand access, consumption-based pricing, and that serverless still uses servers managed by the provider."
    },
    sw: {
      simple: "Cloud computing ni kutumia huduma za kompyuta kupitia intaneti unapozihitaji, badala ya kununua na kutunza kila seva. Malipo yanaweza kutegemea matumizi na masharti ya bei.",
      example: "Ni kama kutumia umeme wa gridi badala ya kujenga kituo chako cha umeme. Unatumia huduma ya pamoja bila kumiliki miundombinu; bili bado hutegemea matumizi.",
      exam: "Kumbuka upatikanaji unapohitaji, malipo kulingana na matumizi, na kwamba serverless bado hutumia seva zinazosimamiwa na mtoa huduma."
    }
  },
  {
    id: "cloud-models", domain: "cloud", icon: "◉", title: "Public, private & hybrid cloud",
    keywords: ["public cloud", "private cloud", "hybrid cloud", "cloud models", "deployment model", "wingu la umma", "wingu binafsi"],
    en: {
      simple: "A public cloud shares a provider's infrastructure among customers. A private cloud is dedicated to one organization. A hybrid cloud connects public and private environments so an organization can use both.",
      example: "A business might keep a sensitive system in its own private environment and run its public website in Azure. The right choice depends on its control, security, cost, and operating needs.",
      exam: "Public, private, and hybrid are deployment models. Hybrid combines environments; it does not mean choosing only one."
    },
    sw: {
      simple: "Public cloud hushiriki miundombinu ya mtoa huduma kati ya wateja. Private cloud imejitolea kwa shirika moja. Hybrid cloud huunganisha mazingira ya public na private ili shirika litumie yote mawili.",
      example: "Biashara inaweza kuweka mfumo nyeti kwenye mazingira yake ya private na tovuti ya umma kwenye Azure. Chaguo hutegemea udhibiti, usalama, gharama na mahitaji ya uendeshaji.",
      exam: "Public, private na hybrid ni aina za deployment. Hybrid huunganisha mazingira; haimaanishi kuchagua moja tu."
    }
  },
  {
    id: "service-types", domain: "cloud", icon: "▤", title: "IaaS, PaaS & SaaS",
    keywords: ["iaas", "paas", "saas", "infrastructure as a service", "platform as a service", "software as a service"],
    en: {
      simple: "IaaS provides configurable virtual infrastructure. PaaS provides a managed platform for building and running apps. SaaS is a ready-to-use application delivered over a network. The provider generally manages more as you move from IaaS to SaaS.",
      example: "IaaS is like arranging a rented shop; PaaS is a fitted-out kitchen; SaaS is a prepared meal. This is a memory aid, not a precise technical comparison.",
      exam: "All three models share responsibilities. IaaS usually gives the customer more control; SaaS usually gives the provider more management work."
    },
    sw: {
      simple: "IaaS hutoa miundombinu pepe inayoweza kusanidiwa. PaaS hutoa jukwaa linalosimamiwa la kujenga programu. SaaS ni programu iliyo tayari. Mtoa huduma husimamia zaidi kutoka IaaS hadi SaaS.",
      example: "IaaS ni kama kupanga duka la kukodi; PaaS ni jiko lenye vifaa; SaaS ni chakula kilichoandaliwa. Huu ni mfano wa kukumbuka, si ulinganisho kamili.",
      exam: "Aina zote hushirikisha majukumu. IaaS kwa kawaida humpa mteja udhibiti zaidi; SaaS humwachia mtoa huduma usimamizi zaidi."
    }
  },
  {
    id: "shared-responsibility", domain: "cloud", icon: "⛨", title: "Shared responsibility",
    keywords: ["shared responsibility", "security", "customer responsibility", "provider responsibility", "wajibu wa pamoja"],
    en: {
      simple: "Cloud security is shared. Microsoft protects parts of the cloud infrastructure; customers retain responsibility for their data, identities, and settings they control. The exact boundary depends on the service.",
      example: "When renting a secure shop, the landlord maintains the building, but you manage your own stock and keys. A more managed cloud service shifts more infrastructure work to the provider.",
      exam: "Customers remain responsible for their data and identities. Do not assume the provider secures every customer setting."
    },
    sw: {
      simple: "Usalama wa wingu hushirikishwa. Microsoft hulinda sehemu za miundombinu; wateja huwajibika kwa data, utambulisho na mipangilio wanayodhibiti. Mpaka halisi hutegemea aina ya huduma.",
      example: "Unapokodi duka salama, mwenye jengo hutunza jengo lakini wewe husimamia bidhaa na funguo zako. Huduma inayosimamiwa zaidi humwachia mtoa huduma kazi zaidi.",
      exam: "Wateja huendelea kuwajibika kwa data na utambulisho wao. Usidhani mtoa huduma husimamia kila mpangilio wa mteja."
    }
  },
  {
    id: "cloud-benefits", domain: "cloud", icon: "↗", title: "Cloud benefits & serverless",
    keywords: ["availability", "scalability", "elasticity", "reliability", "predictability", "manageability", "benefits", "serverless"],
    en: {
      simple: "Cloud services can help adjust capacity, design for availability and reliability, and manage resources with provider tools. Serverless lets a team focus on code while the provider manages server infrastructure; it does not mean servers do not exist.",
      example: "A shop can prepare more stock for a busy season and less when demand falls. Cloud capacity can also be adjusted to workload needs, though good configuration still matters.",
      exam: "Scalability means changing capacity to meet demand; elasticity emphasizes adjusting as demand changes. Cloud does not guarantee lower costs or reliability automatically."
    },
    sw: {
      simple: "Huduma za wingu zinaweza kusaidia kurekebisha uwezo na kusimamia rasilimali. Serverless humruhusu mtengenezaji kuzingatia msimbo huku mtoa huduma akisimamia seva; haimaanishi hakuna seva.",
      example: "Duka linaweza kuandaa bidhaa zaidi msimu wenye wateja wengi na chache mahitaji yakipungua. Uwezo wa wingu pia unaweza kurekebishwa, lakini usanidi mzuri bado ni muhimu.",
      exam: "Scalability ni kubadilisha uwezo kulingana na mahitaji; elasticity husisitiza kurekebisha mahitaji yanapobadilika. Wingu halihakikishi gharama nafuu au reliability moja kwa moja."
    }
  },
  {
    id: "azure-hierarchy", domain: "architecture", icon: "▦", title: "Azure resources & hierarchy",
    keywords: ["resource group", "subscription", "management group", "hierarchy", "azure resource"],
    en: {
      simple: "A resource is an individual Azure service instance. Resource groups organize related resources. Subscriptions are management and billing boundaries. Management groups help organize multiple subscriptions.",
      example: "Think of a school system: management groups organize subscriptions, subscriptions contain resource groups, and each group can hold project resources.",
      exam: "Know the hierarchy: management groups → subscriptions → resource groups → resources."
    },
    sw: {
      simple: "Resource ni huduma moja ya Azure. Resource groups hupanga resources zinazohusiana. Subscriptions ni mipaka ya usimamizi na bili. Management groups hupanga subscriptions nyingi.",
      example: "Fikiria mfumo wa shule: management groups hupanga subscriptions, subscriptions huwa na resource groups, nazo huwa na resources za mradi.",
      exam: "Kumbuka mpangilio: management groups → subscriptions → resource groups → resources."
    }
  },
  {
    id: "regions-zones", domain: "architecture", icon: "◎", title: "Regions, region pairs & zones",
    keywords: ["region", "regions", "availability zone", "zones", "region pair", "datacenter", "sovereign region"],
    en: {
      simple: "An Azure region is a geographic area containing one or more datacenters. Availability zones are physically separate locations within a supported region. Region pairs are designated regions in the same geography for platform considerations.",
      example: "Keeping important records in separate buildings can reduce the effect of a local problem. A separate region gives geographic separation; a zone is a separate location within a region.",
      exam: "A region is not a zone. Zone availability varies by region and service; check requirements and availability when choosing."
    },
    sw: {
      simple: "Azure region ni eneo la kijiografia lenye kituo kimoja au zaidi cha data. Availability zones ni maeneo tofauti ya kimwili ndani ya region inayoyaunga mkono. Region pairs ni regions zilizooanishwa kwenye jiografia moja.",
      example: "Kuweka rekodi muhimu kwenye majengo tofauti kunaweza kupunguza athari ya tatizo la eneo moja. Region tofauti hutoa mtengano wa kijiografia; zone ni eneo tofauti ndani ya region.",
      exam: "Region si zone. Upatikanaji wa zones hutegemea region na huduma; hakikisha upatikanaji unapochagua."
    }
  },
  {
    id: "compute", domain: "architecture", icon: "▣", title: "Azure compute options",
    keywords: ["compute", "virtual machine", "vm", "containers", "container", "functions", "scale sets", "virtual desktop", "web apps"],
    en: {
      simple: "Virtual machines are configurable virtual computers. Containers package an app with its dependencies. Functions run code in response to events while the provider manages server infrastructure. Azure also offers managed app hosting and VM scale sets.",
      example: "A VM is a room you arrange. A container is a packed kit you can move. A function is a service doing a task when a delivery arrives.",
      exam: "Compare options by control, portability, management effort, and workload pattern. No one compute option fits every task."
    },
    sw: {
      simple: "Virtual machines ni kompyuta pepe unazoweza kusanidi. Containers huweka programu na mahitaji yake pamoja. Functions huendesha msimbo tukio linapotokea huku mtoa huduma akisimamia seva.",
      example: "VM ni chumba unachopanga. Container ni kifurushi kinachoweza kuhamishwa. Function ni huduma inayofanya kazi tukio linapotokea.",
      exam: "Linganisha chaguo kwa udhibiti, portability, usimamizi na aina ya kazi. Hakuna chaguo moja linalofaa kila kazi."
    }
  },
  {
    id: "networking", domain: "architecture", icon: "⌘", title: "Azure networking",
    keywords: ["network", "networking", "virtual network", "vnet", "subnet", "peering", "dns", "vpn gateway", "expressroute", "endpoint"],
    en: {
      simple: "A Virtual Network (VNet) is a private network boundary for Azure resources. Subnets divide a VNet; peering connects VNets. VPN Gateway uses encrypted internet tunnels; ExpressRoute provides a private connection through a connectivity provider.",
      example: "A VNet is like private roads for cloud resources. Subnets are neighborhoods, and a gateway is a controlled route between networks.",
      exam: "Public endpoints use public connectivity; private endpoints use a private IP in a VNet to connect privately to a supported service."
    },
    sw: {
      simple: "Virtual Network (VNet) ni mpaka wa mtandao binafsi wa Azure. Subnets hugawa VNet; peering huunganisha VNets. VPN Gateway hutumia njia fiche za intaneti; ExpressRoute hutoa muunganisho binafsi kupitia mtoa huduma.",
      example: "VNet ni kama barabara binafsi za resources za wingu. Subnets ni vitongoji, na gateway ni njia inayodhibitiwa kati ya mitandao.",
      exam: "Public endpoint hutumia muunganisho wa umma; private endpoint hutumia IP binafsi kwenye VNet kuunganisha huduma inayoungwa mkono."
    }
  },
  {
    id: "storage", domain: "architecture", icon: "▤", title: "Azure Storage",
    keywords: ["storage", "blob", "file", "queue", "table", "redundancy", "storage tier", "archive", "azcopy", "data box"],
    en: {
      simple: "Azure Storage includes Blob Storage for object data, Azure Files for file shares, Queues for messages, and Tables for NoSQL key-value data. Access tiers and redundancy options depend on the service and workload.",
      example: "A community group might keep shared documents in a file share, photos as blobs, and use a queue to pass work between parts of an app.",
      exam: "Choose storage by data type and access pattern. Redundancy and tier choices affect resilience, access, and cost."
    },
    sw: {
      simple: "Azure Storage ina Blob Storage ya object data, Azure Files ya file shares, Queues za ujumbe na Tables za data ya NoSQL key-value. Access tiers na redundancy hutegemea huduma na workload.",
      example: "Kikundi cha jamii kinaweza kuhifadhi nyaraka za pamoja kwenye file share, picha kama blobs na kutumia queue kupitisha kazi ndani ya programu.",
      exam: "Chagua storage kulingana na aina ya data na matumizi. Redundancy na tier huathiri resilience, ufikiaji na gharama."
    }
  },
  {
    id: "identity-security", domain: "governance", icon: "⛨", title: "Identity, access & security",
    keywords: ["identity", "entra", "microsoft entra", "authentication", "mfa", "passwordless", "conditional access", "rbac", "zero trust", "defender", "security"],
    en: {
      simple: "Microsoft Entra ID provides cloud identity capabilities. Authentication checks who you are; authorization determines what you can do. MFA adds a verification step. Azure RBAC assigns resource permissions at a scope.",
      example: "A staff badge shows who you are; your role determines which rooms you may enter. MFA adds another check, and RBAC grants access based on responsibilities.",
      exam: "Authentication is not authorization. Entra ID manages identities; RBAC controls access to Azure resources. Zero Trust emphasizes explicit verification and least privilege."
    },
    sw: {
      simple: "Microsoft Entra ID hutoa uwezo wa utambulisho wa wingu. Authentication huthibitisha wewe ni nani; authorization huamua unachoweza kufanya. MFA huongeza uthibitisho. Azure RBAC hutoa ruhusa kwenye scope.",
      example: "Kitambulisho cha mfanyakazi huthibitisha wewe ni nani; nafasi yako huamua vyumba unavyoweza kuingia. MFA huongeza ukaguzi, na RBAC hutoa ufikiaji kulingana na kazi.",
      exam: "Authentication si authorization. Entra ID husimamia identities; RBAC hudhibiti ufikiaji wa resources. Zero Trust husisitiza uthibitishaji na ruhusa chache zinazohitajika."
    }
  },
  {
    id: "cost-management", domain: "governance", icon: "◈", title: "Cost management",
    keywords: ["cost", "pricing calculator", "capex", "opex", "tags", "budgets", "cost management"],
    en: {
      simple: "Azure costs depend on factors such as resource type, region, usage, and service tier. The Pricing Calculator estimates planned costs; Cost Management helps review actual and forecast spending. Tags can help organize cost reports.",
      example: "A shop estimates rent and electricity before opening, then checks its monthly bills. A cloud team can estimate services and monitor usage, but should verify prices and assumptions.",
      exam: "Cloud is not automatically cheaper. Tags are metadata, not a cost limit; use budgets and monitoring to manage spend."
    },
    sw: {
      simple: "Gharama za Azure hutegemea aina ya resource, region, matumizi na tier. Pricing Calculator hukadiria gharama; Cost Management husaidia kuchunguza matumizi halisi na makadirio. Tags hupanga ripoti za gharama.",
      example: "Duka hukadiria kodi na umeme kabla ya kufunguliwa, kisha hukagua bili. Timu ya wingu inaweza kukadiria huduma na kufuatilia matumizi, lakini ihakiki bei.",
      exam: "Wingu si lazima liwe nafuu zaidi. Tags ni metadata, si kikomo cha gharama; tumia budgets na ufuatiliaji."
    }
  },
  {
    id: "governance-compliance", domain: "governance", icon: "▣", title: "Governance & compliance",
    keywords: ["governance", "compliance", "azure policy", "resource locks", "purview", "policy", "locks"],
    en: {
      simple: "Azure Policy evaluates resources against organizational rules and can audit or enforce supported requirements. Resource locks help prevent accidental deletion or changes. Microsoft Purview includes data governance capabilities.",
      example: "A school checks every new classroom against a fire-safety rule. A lock is an extra guard against accidentally removing an important resource.",
      exam: "Policy checks or enforces rules; a lock blocks certain operations. Neither replaces access permissions or a full security plan."
    },
    sw: {
      simple: "Azure Policy hukagua resources dhidi ya sheria za shirika na inaweza kukagua au kutekeleza mahitaji. Resource locks husaidia kuzuia kufuta au kubadilisha kwa bahati mbaya. Microsoft Purview ina uwezo wa data governance.",
      example: "Shule hukagua kila darasa jipya kwa sheria ya usalama wa moto. Lock ni kinga ya ziada dhidi ya kuondoa resource muhimu kimakosa.",
      exam: "Policy hukagua au kutekeleza sheria; lock huzuia baadhi ya vitendo. Hakuna mojawapo inayochukua nafasi ya ruhusa au mpango kamili wa usalama."
    }
  },
  {
    id: "management-tools", domain: "governance", icon: "⌘", title: "Manage & deploy resources",
    keywords: ["portal", "cloud shell", "cli", "powershell", "arm", "arm template", "infrastructure as code", "iac", "azure arc"],
    en: {
      simple: "The Azure portal is a web interface for managing services. Azure CLI and PowerShell support command-line management. Azure Resource Manager (ARM) handles deployment and management; ARM templates describe infrastructure as code.",
      example: "A portal is like filling a form by hand; a script is a repeatable recipe. Infrastructure as code helps teams create consistent environments.",
      exam: "ARM is the management and deployment layer. ARM templates are declarative descriptions of resources, not the portal itself."
    },
    sw: {
      simple: "Azure portal ni kiolesura cha wavuti. Azure CLI na PowerShell husaidia usimamizi kwa command line. Azure Resource Manager (ARM) hushughulikia deployment na usimamizi; ARM templates hueleza infrastructure as code.",
      example: "Portal ni kama kujaza fomu mwenyewe; script ni kichocheo kinachoweza kurudiwa. Infrastructure as code husaidia kuunda mazingira yanayofanana.",
      exam: "ARM ni safu ya usimamizi na deployment. ARM templates ni maelezo ya resources, si portal."
    }
  },
  {
    id: "monitoring", domain: "governance", icon: "⌁", title: "Monitoring & service health",
    keywords: ["monitor", "monitoring", "azure monitor", "log analytics", "alerts", "application insights", "advisor", "service health"],
    en: {
      simple: "Azure Monitor collects and analyzes monitoring data. Log Analytics queries logs; alerts notify you when conditions are met. Application Insights helps monitor apps. Service Health reports Azure service issues that may affect you; Advisor offers recommendations.",
      example: "A matatu operator checks vehicle status, gets an alert when something needs attention, and receives maintenance recommendations. Different tools answer different questions.",
      exam: "Azure Monitor is the broader monitoring service. Service Health reports service events; Advisor gives recommendations."
    },
    sw: {
      simple: "Azure Monitor hukusanya na kuchambua data. Log Analytics huuliza logs; alerts hukuarifu masharti yanapotimia. Application Insights hufuatilia programu. Service Health huripoti matatizo ya huduma za Azure; Advisor hutoa mapendekezo.",
      example: "Mwendeshaji wa matatu huangalia gari, hupata tahadhari tatizo linapotokea na kupokea mapendekezo ya matengenezo. Zana tofauti hujibu maswali tofauti.",
      exam: "Azure Monitor ndiyo huduma pana ya ufuatiliaji. Service Health huripoti matukio ya huduma; Advisor hutoa mapendekezo."
    }
  }
];

const questions = [
  { domain: "CLOUD CONCEPTS", prompt: "Which statement best describes a consumption-based cloud model?", options: ["Pay for resources according to usage", "Buy every server before using a service", "Pay the same amount regardless of usage", "The provider owns the customer's data"], answer: 0, explanation: "A consumption-based model charges according to the services and resources used, subject to their pricing rules.", sw: { prompt: "Ni kauli ipi inayoeleza vizuri mfumo wa wingu unaotegemea matumizi?", options: ["Lipa kulingana na rasilimali zilizotumika", "Nunua kila seva kabla ya kutumia huduma", "Lipa kiasi kilekile bila kujali matumizi", "Mtoa huduma ndiye mmiliki wa data ya mteja"], explanation: "Mfumo huu hutoza kulingana na huduma na rasilimali zilizotumika, kwa kufuata masharti ya bei." } },
  { domain: "CLOUD CONCEPTS", prompt: "Which cloud model combines public services with a private environment?", options: ["Public", "Private", "Hybrid", "Serverless"], answer: 2, explanation: "A hybrid cloud combines public and private cloud environments.", sw: { prompt: "Ni aina gani ya wingu huunganisha huduma za public na mazingira ya private?", options: ["Public", "Private", "Hybrid", "Serverless"], explanation: "Hybrid cloud huunganisha mazingira ya public na private." } },
  { domain: "CLOUD CONCEPTS", prompt: "Which service model usually gives the customer the most control over virtual infrastructure?", options: ["SaaS", "PaaS", "IaaS", "DNS"], answer: 2, explanation: "IaaS provides virtual infrastructure and generally more customer control than PaaS or SaaS.", sw: { prompt: "Ni aina gani ya huduma kwa kawaida humpa mteja udhibiti zaidi wa miundombinu pepe?", options: ["SaaS", "PaaS", "IaaS", "DNS"], explanation: "IaaS hutoa miundombinu pepe na kwa kawaida humpa mteja udhibiti zaidi kuliko PaaS au SaaS." } },
  { domain: "AZURE ARCHITECTURE", prompt: "Which order shows the Azure management hierarchy from broadest to most specific?", options: ["Resources → resource groups → subscriptions → management groups", "Management groups → subscriptions → resource groups → resources", "Subscriptions → management groups → resources → resource groups", "Resource groups → resources → management groups → subscriptions"], answer: 1, explanation: "Management groups organize subscriptions, which contain resource groups and then resources.", sw: { prompt: "Ni mpangilio upi unaonyesha Azure management hierarchy kutoka pana hadi mahususi?", options: ["Resources → resource groups → subscriptions → management groups", "Management groups → subscriptions → resource groups → resources", "Subscriptions → management groups → resources → resource groups", "Resource groups → resources → management groups → subscriptions"], explanation: "Management groups hupanga subscriptions, ambazo huwa na resource groups na kisha resources." } },
  { domain: "AZURE ARCHITECTURE", prompt: "What is an availability zone?", options: ["A billing scope for many subscriptions", "A physically separate location within a supported region", "A private cloud deployment model", "A storage account type"], answer: 1, explanation: "Availability zones are physically separate locations within a region that supports them.", sw: { prompt: "Availability zone ni nini?", options: ["Kiwango cha bili cha subscriptions nyingi", "Eneo tofauti la kimwili ndani ya region inayoliunga mkono", "Aina ya private cloud", "Aina ya storage account"], explanation: "Availability zones ni maeneo tofauti ya kimwili ndani ya region inayoyaunga mkono." } },
  { domain: "AZURE ARCHITECTURE", prompt: "Which Azure service is designed for unstructured object data such as images?", options: ["Azure Blob Storage", "Azure Policy", "Azure VPN Gateway", "Microsoft Entra ID"], answer: 0, explanation: "Azure Blob Storage is designed to store large amounts of unstructured object data.", sw: { prompt: "Ni huduma gani ya Azure imeundwa kwa object data isiyo na muundo kama picha?", options: ["Azure Blob Storage", "Azure Policy", "Azure VPN Gateway", "Microsoft Entra ID"], explanation: "Azure Blob Storage imeundwa kuhifadhi kiasi kikubwa cha object data isiyo na muundo." } },
  { domain: "SECURITY & GOVERNANCE", prompt: "What does Azure role-based access control (RBAC) help manage?", options: ["Azure resource permissions at a scope", "Datacenter locations", "The price of every Azure service", "Storage file formats"], answer: 0, explanation: "Azure RBAC assigns roles to identities at a scope to control access to Azure resources.", sw: { prompt: "Azure RBAC husaidia kusimamia nini?", options: ["Ruhusa za Azure resources kwenye scope", "Mahali pa datacenters", "Bei ya kila huduma ya Azure", "Miundo ya faili za storage"], explanation: "Azure RBAC hutoa roles kwa identities kwenye scope ili kudhibiti ufikiaji wa resources." } },
  { domain: "SECURITY & GOVERNANCE", prompt: "Which tool can audit or enforce organizational rules on Azure resources?", options: ["Azure Policy", "Azure Files", "Azure DNS", "Azure Functions"], answer: 0, explanation: "Azure Policy evaluates resources against rules and can audit or enforce supported requirements.", sw: { prompt: "Ni zana gani inaweza kukagua au kutekeleza sheria za shirika kwenye resources?", options: ["Azure Policy", "Azure Files", "Azure DNS", "Azure Functions"], explanation: "Azure Policy hukagua resources dhidi ya sheria na inaweza kukagua au kutekeleza mahitaji yanayoungwa mkono." } },
  { domain: "MANAGEMENT & GOVERNANCE", prompt: "Which service provides recommendations to improve Azure resource configuration?", options: ["Azure Advisor", "Azure Files", "Azure DNS", "Azure Virtual Network"], answer: 0, explanation: "Azure Advisor analyzes configurations and usage, then provides recommendations across supported areas.", sw: { prompt: "Ni huduma gani hutoa mapendekezo ya kuboresha usanidi wa Azure resources?", options: ["Azure Advisor", "Azure Files", "Azure DNS", "Azure Virtual Network"], explanation: "Azure Advisor huchambua usanidi na matumizi kisha hutoa mapendekezo kwenye maeneo yanayoungwa mkono." } }
];

const strings = {
  en: { language: "English", switch: "Switch to Kiswahili", welcome: "Jambo! What cloud concept would you like to understand today?", notFound: "I don’t have a reviewed note for that question yet. Try a suggested question or choose a topic below.", simple: "In simple terms", example: "A familiar example", exam: "AZ-900 reminder", ask: "Ask Buddy", placeholder: "Ask about an AZ-900 concept…", askTopic: "Ask Study Buddy", noResults: "No matching concepts. Try another search.", next: "Next question", finish: "See your result", restart: "Try again", correct: "Correct!", incorrect: "Not quite.", correctCount: "correct", none: "No questions answered yet", answered: "questions answered", complete: "Practice set complete!", resetConfirm: "Reset your Study Buddy progress on this device?", resetDone: "Study progress reset on this device.", cancelled: "Reset cancelled.", storage: "Progress could not be saved in this browser." },
  sw: { language: "Kiswahili", switch: "Switch to English", welcome: "Jambo! Ungependa kuelewa dhana gani ya wingu leo?", notFound: "Bado sina dokezo lililokaguliwa kwa swali hilo. Jaribu swali lililopendekezwa au uchague mada hapa chini.", simple: "Kwa maneno rahisi", example: "Mfano unaofahamika", exam: "Kumbusho la AZ-900", ask: "Uliza Buddy", placeholder: "Uliza kuhusu dhana ya AZ-900…", askTopic: "Uliza Study Buddy", noResults: "Hakuna dhana zinazolingana. Jaribu kutafuta tena.", next: "Swali linalofuata", finish: "Ona matokeo yako", restart: "Jaribu tena", correct: "Sahihi!", incorrect: "Bado.", correctCount: "sahihi", none: "Bado hujajibu swali", answered: "maswali yamejibiwa", complete: "Maswali yamekamilika!", resetConfirm: "Ufute maendeleo ya Study Buddy kwenye kifaa hiki?", resetDone: "Maendeleo kwenye kifaa hiki yamefutwa.", cancelled: "Kufuta kumeghairiwa.", storage: "Maendeleo hayakuweza kuhifadhiwa kwenye kivinjari hiki." }
};

const storageKey = "study-buddy-az900-progress";
const el = selector => document.querySelector(selector);
const progress = loadProgress();
const state = {
  language: progress.language,
  viewed: new Set(progress.viewed),
  correct: progress.correct,
  answered: progress.answered,
  filter: "all",
  search: "",
  lastQuestion: "",
  quizIndex: 0,
  selection: null,
  complete: false
};
let toastTimer;

function loadProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) || "{}");
    return {
      language: saved.language === "sw" ? "sw" : "en",
      viewed: Array.isArray(saved.viewed) ? saved.viewed.filter(id => topics.some(topic => topic.id === id)) : [],
      correct: Number.isInteger(saved.correct) && saved.correct >= 0 ? saved.correct : 0,
      answered: Number.isInteger(saved.answered) && saved.answered >= 0 ? saved.answered : 0
    };
  } catch (error) {
    window.setTimeout(() => showToast(strings.en.storage), 0);
    return { language: "en", viewed: [], correct: 0, answered: 0 };
  }
}

function saveProgress() {
  try {
    localStorage.setItem(storageKey, JSON.stringify({
      language: state.language,
      viewed: [...state.viewed],
      correct: state.correct,
      answered: state.answered
    }));
  } catch (error) {
    showToast(strings[state.language].storage);
  }
}

function showToast(message) {
  const toast = el("#toast");
  toast.textContent = message;
  toast.classList.add("visible");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("visible"), 2600);
}

function node(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;
  return element;
}

function renderProgress() {
  el("#topic-progress-label").textContent = `${state.viewed.size} / ${topics.length}`;
  el("#topic-progress-fill").style.width = `${Math.round(state.viewed.size / topics.length * 100)}%`;
  const text = strings[state.language];
  el("#quiz-score").textContent = `${state.correct} ${text.correctCount}`;
  el("#quiz-answered").textContent = state.answered ? `${state.answered} ${text.answered}` : text.none;
}

function renderTopics() {
  const query = state.search.trim().toLowerCase().split(/\s+/).filter(Boolean);
  const shown = topics.filter(topic => {
    const filterMatches = state.filter === "all" || topic.domain === state.filter;
    const haystack = `${topic.title} ${topic.keywords.join(" ")}`.toLowerCase();
    return filterMatches && query.every(word => haystack.includes(word));
  });
  const grid = el("#topic-grid");
  grid.replaceChildren();
  for (const topic of shown) {
    const card = node("article", `topic-card domain-${topic.domain}`);
    const heading = node("div", "topic-card-heading");
    heading.append(node("span", "topic-icon", topic.icon));
    heading.append(node("span", "topic-domain", topic.domain === "cloud" ? "CLOUD CONCEPTS" : topic.domain === "architecture" ? "ARCHITECTURE & SERVICES" : "MANAGEMENT & GOVERNANCE"));
    if (state.viewed.has(topic.id)) heading.append(node("span", "topic-complete", "✓"));
    card.append(heading);
    card.append(node("h3", "", topic.title));
    card.append(node("p", "", topic[state.language].simple));
    const button = node("button", "topic-link", strings[state.language].askTopic);
    button.type = "button";
    button.dataset.topicId = topic.id;
    button.append(node("span", "", "→"));
    card.append(button);
    grid.append(card);
  }
  grid.hidden = shown.length === 0;
  el("#empty-state").hidden = shown.length !== 0;
  el("#empty-state").textContent = strings[state.language].noResults;
}

function matchTopic(question) {
  const normalized = question.toLowerCase();
  let bestTopic = null;
  let bestScore = 0;
  for (const topic of topics) {
    const score = topic.keywords.reduce((sum, keyword) => sum + (normalized.includes(keyword) ? (keyword.includes(" ") ? 3 : 2) : 0), 0);
    if (score > bestScore) {
      bestScore = score;
      bestTopic = topic;
    }
  }
  return bestTopic;
}

function makeAnswer(topic) {
  const text = strings[state.language];
  const copy = topic[state.language];
  const card = node("article", "answer-card");
  card.append(node("h3", "", `${topic.icon} ${topic.title}`));
  for (const [label, body] of [[text.simple, copy.simple], [text.example, copy.example], [text.exam, copy.exam]]) {
    const section = node("section", "answer-section");
    section.append(node("strong", "", label));
    section.append(node("p", "", body));
    card.append(section);
  }
  return card;
}

function addLearnerMessage(question) {
  const bubble = node("div", "learner-message", question);
  el("#chat-log").append(bubble);
}

function answer(question) {
  const trimmed = question.trim();
  if (!trimmed) return;
  state.lastQuestion = trimmed;
  const log = el("#chat-log");
  addLearnerMessage(trimmed);
  const topic = matchTopic(trimmed);
  if (!topic) {
    log.append(node("div", "buddy-message", strings[state.language].notFound));
    log.scrollTop = log.scrollHeight;
    return;
  }
  state.viewed.add(topic.id);
  const wrapper = node("div", "buddy-message");
  wrapper.append(makeAnswer(topic));
  log.append(wrapper);
  log.scrollTop = log.scrollHeight;
  renderTopics();
  renderProgress();
  saveProgress();
}

function renderChat() {
  const log = el("#chat-log");
  log.replaceChildren(node("div", "chat-welcome", strings[state.language].welcome));
  if (!state.lastQuestion) return;
  addLearnerMessage(state.lastQuestion);
  const topic = matchTopic(state.lastQuestion);
  if (topic) {
    const wrapper = node("div", "buddy-message");
    wrapper.append(makeAnswer(topic));
    log.append(wrapper);
  } else {
    log.append(node("div", "buddy-message", strings[state.language].notFound));
  }
}

function renderQuiz() {
  const text = strings[state.language];
  const next = el("#next-question");
  const progressFill = el("#quiz-progress-fill");
  const feedback = el("#answer-feedback");
  if (state.complete) {
    el("#question-number").textContent = text.complete.toUpperCase();
    progressFill.style.width = "100%";
    el("#quiz-content").replaceChildren(node("p", "quiz-complete", `${text.complete} ${state.correct} ${text.correctCount}.`));
    feedback.textContent = "";
    next.disabled = false;
    next.firstChild.textContent = `${text.restart} `;
    return;
  }
  const question = questions[state.quizIndex];
  const localized = state.language === "sw" ? question.sw : question;
  el("#question-number").textContent = `${state.language === "sw" ? "SWALI" : "QUESTION"} ${state.quizIndex + 1} OF ${questions.length}`;
  progressFill.style.width = `${(state.quizIndex + 1) / questions.length * 100}%`;
  const content = el("#quiz-content");
  content.replaceChildren(node("p", "quiz-domain", question.domain), node("h3", "quiz-question", localized.prompt));
  const choices = node("div", "quiz-options");
  localized.options.forEach((option, index) => {
    const button = node("button", "quiz-option", option);
    button.type = "button";
    button.disabled = state.selection !== null;
    if (state.selection === index) button.classList.add(index === question.answer ? "correct" : "incorrect");
    else if (state.selection !== null && index === question.answer) button.classList.add("correct");
    button.addEventListener("click", () => chooseAnswer(index));
    choices.append(button);
  });
  content.append(choices);
  if (state.selection === null) feedback.textContent = "";
  else feedback.textContent = `${state.selection === question.answer ? text.correct : text.incorrect} ${localized.explanation}`;
  next.disabled = state.selection === null;
  next.firstChild.textContent = `${state.quizIndex === questions.length - 1 ? text.finish : text.next} `;
}

function chooseAnswer(index) {
  if (state.selection !== null) return;
  state.selection = index;
  state.answered += 1;
  if (index === questions[state.quizIndex].answer) state.correct += 1;
  renderQuiz();
  renderProgress();
  saveProgress();
}

function applyLanguage() {
  const text = strings[state.language];
  document.documentElement.lang = state.language;
  el("#language-label").textContent = text.language;
  el("#language-toggle").setAttribute("aria-label", text.switch);
  el("#chat-language").textContent = text.language;
  el("#question-input").placeholder = text.placeholder;
  el("#ask-form button").firstChild.textContent = `${text.ask} `;
  renderChat();
  renderTopics();
  renderQuiz();
  renderProgress();
}

el("#ask-form").addEventListener("submit", event => {
  event.preventDefault();
  const input = el("#question-input");
  answer(input.value);
  input.value = "";
});

document.querySelectorAll("[data-question]").forEach(button => {
  button.addEventListener("click", () => answer(button.dataset.question));
});

el("#topic-grid").addEventListener("click", event => {
  const button = event.target.closest("[data-topic-id]");
  if (!button) return;
  const topic = topics.find(item => item.id === button.dataset.topicId);
  if (!topic) return;
  answer(topic.title);
  el("#buddy").scrollIntoView({ behavior: "smooth", block: "start" });
});

el("#topic-search").addEventListener("input", event => {
  state.search = event.target.value;
  renderTopics();
});

document.querySelectorAll(".filter-button").forEach(button => {
  button.addEventListener("click", () => {
    state.filter = button.dataset.filter;
    document.querySelectorAll(".filter-button").forEach(item => {
      const selected = item === button;
      item.classList.toggle("active", selected);
      item.setAttribute("aria-pressed", String(selected));
    });
    renderTopics();
  });
});

el("#language-toggle").addEventListener("click", () => {
  state.language = state.language === "en" ? "sw" : "en";
  saveProgress();
  applyLanguage();
});

el("#next-question").addEventListener("click", () => {
  if (state.complete) {
    state.quizIndex = 0;
    state.selection = null;
    state.complete = false;
  } else if (state.selection !== null) {
    if (state.quizIndex === questions.length - 1) state.complete = true;
    else {
      state.quizIndex += 1;
      state.selection = null;
    }
  }
  renderQuiz();
});

el("#reset-progress").addEventListener("click", () => {
  const text = strings[state.language];
  if (!window.confirm(text.resetConfirm)) {
    showToast(text.cancelled);
    return;
  }
  state.viewed.clear();
  state.correct = 0;
  state.answered = 0;
  state.lastQuestion = "";
  state.quizIndex = 0;
  state.selection = null;
  state.complete = false;
  saveProgress();
  applyLanguage();
  showToast(strings[state.language].resetDone);
});

const menuToggle = el("#menu-toggle");
const nav = el("#site-nav");
menuToggle.addEventListener("click", () => {
  const open = menuToggle.getAttribute("aria-expanded") !== "true";
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
  nav.classList.toggle("is-open", open);
});
nav.addEventListener("click", event => {
  if (!event.target.closest("a")) return;
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation");
  nav.classList.remove("is-open");
});

applyLanguage();
