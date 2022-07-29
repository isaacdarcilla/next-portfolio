const style = (props) =>
  `color: var(--chakra-colors-brand-${
    props.colorMode === 'light' ? '600' : '300'
  });font-weight: 500;`;
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const info = (props: any): { input: string; return: string }[] => [
  {
    input: 'learnAboutMe()',
    return: 'Loaded data...',
  },
  {
    input: 'currentLocation',
    return: 'Bicol, Philippines',
  },

  {
    input: 'interests',
    return: '["web dev", "dev ops", "biking", "programming", "fishing", "video games"]',
  },
  {
    input: 'education',
    return: '"Bachelor of Science in Computer Engineering"',
  },
  {
    input: 'skills',
    return:
      '[ "Laravel", "PHP", "Node", "Vue", "React", "Tailwind", "Livewire", "Git", "More..."]',
  },
  {
    input: 'contactMe()',
    return: `["<a style="${style(
      props
    )}" rel="noopener" href="https://www.linkedin.com/in/isaacdarcilla/">Linkedin</a>", "<a style="${style(
      props
    )}" rel="noopener" href="https://github.com/isaacdarcilla">Github</a>", "<a rel="noopener" style="${style(
      props
    )}" rel="noopener" href="https://facebook.com/isaacdarcilla">Facebook</a>", "<a rel="noopener" style="${style(
      props
    )}" href="https://gitlab.com/isaacdarcilla">Gitlab</a>"]`,
  },
];

export default info;
