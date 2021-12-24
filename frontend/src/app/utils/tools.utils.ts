export class ToolsUtils {

  public static formatDate(createdAt: string | Date): string {
    const date = new Date(createdAt);

    return date.toLocaleTimeString([], {year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute:'2-digit'});
  }

  public static getImageUrl(phone: string, image: string): string {

    return `https://zinsunion.com/images/${phone.replace("+", '')}/${image}`;
  }

  public static getDaysInMonth(year: number = new Date().getUTCFullYear(), month: number = new Date().getMonth()): number {
    return new Date(new Date().getUTCFullYear(), new Date().getMonth(), 0).getDate()
  }

  public static range(limit, num?: number): string[] {
    const result = []
    for(let i = 1; i < limit + 1; i++) {
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
