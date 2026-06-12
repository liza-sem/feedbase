export type HubCustomTab = {
  name: string;
  url: string;
};

export type HubTab = {
  name: string;
  link: string;
  external?: boolean;
};

export function parseHubCustomTabs(value: unknown): HubCustomTab[] {
  if (!Array.isArray(value)) {
    return [];
  }

  return value
    .filter((tab): tab is HubCustomTab => {
      return (
        typeof tab === 'object' &&
        tab !== null &&
        typeof (tab as HubCustomTab).name === 'string' &&
        typeof (tab as HubCustomTab).url === 'string'
      );
    })
    .map((tab) => ({
      name: tab.name.trim(),
      url: tab.url.trim(),
    }))
    .filter((tab) => tab.name.length > 0 && tab.url.length > 0);
}

export function buildHubTabs(changelogEnabled: boolean, customTabs: HubCustomTab[] | null | undefined): HubTab[] {
  const tabs: HubTab[] = [
    { name: 'Feedback', link: '/feedback' },
    { name: 'Roadmap', link: '/roadmap' },
  ];

  if (changelogEnabled) {
    tabs.push({ name: 'Changelog', link: '/changelog' });
  }

  for (const tab of customTabs || []) {
    tabs.push({
      name: tab.name,
      link: tab.url,
      external: /^https?:\/\//i.test(tab.url),
    });
  }

  return tabs;
}
