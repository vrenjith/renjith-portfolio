// Structured skills data used by the PDF generator
export const skills = {
  cloud: [
    'GCP',
    'AWS'
  ],
  technologyStack: [
    'Nomad',
    'Consul',
    'Terraform',
    'Vault',
    'Jenkins',
    'Contiv',
    'Flannel',
    'Datadog',
    'Artifactory',
    'Kubernetes',
    'Helm',
    'Flagger'
  ],
  languages: [
    'Groovy (current)',
    'Java (current)',
    'C++ (Expert, 2000-2006)',
    'C# (Expert, 2009-2012)',
    'Perl (Expert, 2009-2012)',
    'SQL (Expert, 2003-2006)'
  ],
  databases: [
    'PostgreSQL (Linux)',
    'MySQL (Linux)',
    'Oracle RAC (Solaris)',
    'HANA (Linux)'
  ],
  concepts: [
    'DevOps',
    'OS Internals',
    'Linux Kernel Tuning',
    'Linux Application Tuning'
  ],
  operatingSystems: [
    'Ubuntu',
    'Solaris 8,9 (Sun Cluster)',
    'Windows NT - Server2003'
  ],
  devEnvironments: [
    'VSCode'
  ],
  hardware: [
    'MIPS (Octeon)',
    'SunFire (Sparc)',
    'Primepower (Sparc)',
    'ATCA (Intel)'
  ]
} as const;

export type Skills = typeof skills;
