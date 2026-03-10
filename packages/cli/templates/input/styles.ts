export const inputClassNames = {
  base: 'flex h-10 w-full rounded-md border bg-transparent px-3 py-2 text-sm',
  theme: {
    light:
      'border-input bg-background text-foreground ring-offset-background placeholder:text-muted-foreground focus:ring-ring',
    dark: 'border-dark-input bg-dark-background text-dark-foreground ring-offset-dark-background placeholder:text-dark-muted-foreground focus:ring-dark-ring',
  },
  disabled: 'opacity-50',
  error: 'border-destructive focus:ring-destructive',
};
