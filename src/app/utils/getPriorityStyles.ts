export function getPriorityStyles(priority: string): string {
  switch (priority.toLowerCase()) {
    case 'high':
      return 'bg-red-100 text-red-400';
    case 'medium':
      return 'bg-orange-100 text-orange-400';
    case 'low':
      return 'bg-blue-100 text-blue-400';
    default:
      return 'bg-gray-100 text-gray-400';
  }
}
