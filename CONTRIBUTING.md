# Contributing to React Pro Table

Thank you for your interest in contributing to React Pro Table! This guide will help you get started.

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ 
- npm or yarn
- Git

### Development Setup

```bash
# Clone the repository
git clone https://github.com/mohamed-aje/react-pro-tablex
cd react-pro-tablex

# Install dependencies
npm install

# Start development server
npm run dev

# Run tests
npm test

# Run linting
npm run lint

# Format code
npm run format
```

## 🏗️ Project Structure

```
src/
├── components/          # React components
│   ├── Table.tsx       # Main table component
│   ├── Pagination.tsx  # Pagination component
│   ├── ColumnFilter.tsx # Column filtering
│   ├── MobileCard.tsx  # Mobile card view
│   └── VirtualizedTable.tsx # Virtual scrolling
├── hooks/              # Custom React hooks
├── styles/            # CSS modules
├── types/             # TypeScript definitions
└── index.ts           # Main exports

examples/              # Usage examples
tests/                # Test files
docs/                 # Documentation
```

## 🧪 Testing

We use Jest and React Testing Library for testing:

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage

# Run specific test file
npm test Table.test.tsx
```

### Test Guidelines

1. **Unit Tests**: Test individual functions and components
2. **Integration Tests**: Test component interactions
3. **Accessibility Tests**: Ensure WCAG compliance
4. **Performance Tests**: Verify virtualization and large datasets

### Writing Tests

```tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Table } from '../components/Table';

describe('Table Component', () => {
  it('should render with data', () => {
    render(<Table columns={columns} data={data} />);
    expect(screen.getByRole('table')).toBeInTheDocument();
  });
});
```

## 📋 Code Standards

### TypeScript

- Use strict TypeScript configuration
- Provide comprehensive type definitions
- Use generics for reusable components
- Document complex types with JSDoc

```tsx
/**
 * Table column configuration
 */
interface TableColumn<T = any> {
  key: string;
  title: string;
  dataIndex?: string | ((record: T, index: number) => any);
  render?: (value: any, record: T, index: number) => React.ReactNode;
}
```

### React Best Practices

- Use functional components with hooks
- Implement proper error boundaries
- Memoize expensive calculations
- Follow React performance best practices

```tsx
const Table = React.memo(<T extends TableRowData>({
  columns,
  data,
  ...props
}: TableProps<T>) => {
  const sortedData = useMemo(() => {
    // Expensive sorting logic
  }, [data, sortConfig]);

  return <div>...</div>;
});
```

### CSS Guidelines

- Use CSS modules for styling
- Follow BEM methodology for class names
- Use CSS custom properties for theming
- Ensure responsive design principles

```css
.tableContainer {
  --primary-color: #3b82f6;
  background: var(--bg-color, #ffffff);
}

.tableHeader {
  composes: header from './common.module.css';
}
```

## 🎨 Design System

### Theming

Use CSS custom properties for consistent theming:

```css
:root {
  --primary-color: #3b82f6;
  --border-color: #e1e8ed;
  --text-color: #374151;
  --bg-color: #ffffff;
}
```

### Accessibility

- Follow WCAG 2.1 AA guidelines
- Provide keyboard navigation
- Include proper ARIA labels
- Test with screen readers

```tsx
<table
  role="table"
  aria-label="Data table"
  aria-describedby="table-description"
>
```

## 🔧 Component Development

### Creating New Components

1. Create component file in `src/components/`
2. Export from main `index.ts`
3. Add TypeScript definitions
4. Write comprehensive tests
5. Add Storybook stories
6. Update documentation

### Component Template

```tsx
import React from 'react';
import styles from './ComponentName.module.css';

export interface ComponentNameProps {
  /** Component description */
  prop1: string;
  /** Optional prop with default */
  prop2?: boolean;
}

export const ComponentName: React.FC<ComponentNameProps> = ({
  prop1,
  prop2 = false,
}) => {
  return (
    <div className={styles.container}>
      {/* Component content */}
    </div>
  );
};
```

## 📚 Documentation

### Storybook

Add stories for new components:

```tsx
// ComponentName.stories.tsx
export default {
  title: 'Components/ComponentName',
  component: ComponentName,
} as Meta<typeof ComponentName>;

export const Default: StoryObj<typeof ComponentName> = {
  args: {
    prop1: 'Example value',
  },
};
```

### JSDoc Comments

Document all public APIs:

```tsx
/**
 * Advanced table component with sorting, filtering, and pagination
 * 
 * @example
 * ```tsx
 * <Table
 *   columns={columns}
 *   data={data}
 *   pagination={{ pageSize: 10 }}
 * />
 * ```
 */
export const Table = <T extends TableRowData>({...}: TableProps<T>) => {
```

## 🚢 Release Process

### Versioning

We follow [Semantic Versioning](https://semver.org/):

- **MAJOR**: Breaking changes
- **MINOR**: New features (backward compatible)
- **PATCH**: Bug fixes

### Changelog

Update `CHANGELOG.md` with:
- New features
- Breaking changes
- Bug fixes
- Performance improvements

### Release Checklist

- [ ] All tests passing
- [ ] Documentation updated
- [ ] Changelog updated
- [ ] Version bumped
- [ ] Bundle size within limits
- [ ] No TypeScript errors
- [ ] Accessibility tests pass

## 🐛 Bug Reports

### Before Reporting

1. Check existing issues
2. Test with latest version
3. Create minimal reproduction

### Bug Report Template

```markdown
**Describe the bug**
A clear description of the bug.

**To Reproduce**
Steps to reproduce:
1. Go to '...'
2. Click on '....'
3. See error

**Expected behavior**
What you expected to happen.

**Screenshots**
If applicable, add screenshots.

**Environment:**
- OS: [e.g. iOS]
- Browser [e.g. chrome, safari]
- Version [e.g. 22]

**Additional context**
Any other context about the problem.
```

## 🎯 Feature Requests

### Before Requesting

1. Check if feature exists
2. Search existing issues
3. Consider if it fits project scope

### Feature Request Template

```markdown
**Is your feature request related to a problem?**
A clear description of the problem.

**Describe the solution you'd like**
A clear description of what you want.

**Describe alternatives you've considered**
Alternative solutions or features.

**Additional context**
Any other context or screenshots.
```

## 🤝 Pull Request Process

### Before Submitting

1. Fork the repository
2. Create feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Add tests
5. Update documentation
6. Run full test suite
7. Commit with conventional commits

### Conventional Commits

```bash
feat: add column resizing functionality
fix: resolve pagination bug with large datasets
docs: update README with new examples
style: improve mobile responsiveness
test: add tests for sorting functionality
refactor: optimize virtualization performance
```

### Pull Request Template

```markdown
**Description**
Brief description of changes.

**Type of Change**
- [ ] Bug fix (non-breaking change)
- [ ] New feature (non-breaking change) 
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] Documentation update

**Testing**
- [ ] Tests pass locally
- [ ] Added tests for new functionality
- [ ] Manually tested in browser

**Screenshots**
If applicable, add screenshots.

**Checklist**
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] Tests added/updated
- [ ] No breaking changes (or documented)
```

## 🏆 Recognition

Contributors will be recognized in:
- README.md contributors section
- Release notes
- GitHub contributors page

## ❓ Getting Help

- 💬 [GitHub Discussions](https://github.com/mohamed-aje/react-pro-tablex/discussions)
- 🐛 [GitHub Issues](https://github.com/mohamed-aje/react-pro-tablex/issues)
- 📧 Email: Mohammed_aje@yahoo.com

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to React Pro Table! 🎉