export type ServiceMetadata = {
  title: string
  description: string
  path: string
  serviceName: string
  socialDescription?: string
}

export const developmentSoftwareMetadata = {
  title: 'Desenvolvimento de Software Sob Medida | Soluverx',
  description:
    'Desenvolvimento de software sob medida para empresas que precisam organizar processos, reduzir trabalho manual e criar ferramentas adaptadas à operação.',
  path: '/desenvolvimento-de-software',
  serviceName: 'Desenvolvimento de software sob medida',
  socialDescription:
    'Software sob medida para processos e necessidades que não se encaixam bem em ferramentas prontas.',
} satisfies ServiceMetadata

export const dashboardsMetadata = {
  title: 'Dashboards Empresariais para Decisões | Soluverx',
  description:
    'Dashboards empresariais que centralizam indicadores, metas e tendências para acompanhar a operação e tomar decisões com mais clareza.',
  path: '/dashboards',
  serviceName: 'Dashboards empresariais',
} satisfies ServiceMetadata

export const processAutomationMetadata = {
  title: 'Automação de Processos Empresariais | Soluverx',
  description:
    'Automação de processos para reduzir tarefas repetitivas, retrabalho e etapas manuais, mantendo aprovações e intervenção humana quando necessárias.',
  path: '/automacao-de-processos',
  serviceName: 'Automação de processos',
} satisfies ServiceMetadata

export const systemsIntegrationMetadata = {
  title: 'Integração de Sistemas e APIs | Soluverx',
  description:
    'Integração de sistemas para conectar ferramentas, sincronizar dados e reduzir digitação repetida sem substituir o que já funciona na operação.',
  path: '/integracao-de-sistemas',
  serviceName: 'Integração de sistemas',
} satisfies ServiceMetadata

export const servicePagesMetadata: ServiceMetadata[] = [
  developmentSoftwareMetadata,
  dashboardsMetadata,
  processAutomationMetadata,
  systemsIntegrationMetadata,
]
