export function getPriorityStyles(priority: string): string {
  switch (priority.toLowerCase()) {
    case 'high':
      return 'bg-red-100 text-red-400';
    case 'medium':
      return 'bg-orange-100 text-orange-400';
    case 'low':
      return 'bg-green-100/40 text-green-400';
    default:
      return 'bg-blue-100 text-blue-400';
  }
}
