export class ToolUtils {
  public static getDaysInMonth(year: number = new Date().getUTCFullYear(), month: number = new Date().getMonth()): number {
    return new Date(year, month, 0).getDate();
  }

  public static range(limit, num?: number): string[] {
    const result = [];
    for (let i = 1; i < limit + 1; i++) {
      // eslint-disable-next-line no-restricted-globals
      result.push(!isNaN(num) ? num : i);
    }

    return result;
  }

  public static getCurrentDayOfYear(date = new Date()): number {
    const start = new Date(date.getFullYear(), 0, 0);
    const diff = date.getTime() - start.getTime();
    const oneDay = 1000 * 60 * 60 * 24;

    return Math.floor(diff / oneDay);
  }
}
