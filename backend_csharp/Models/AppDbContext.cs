using Microsoft.EntityFrameworkCore;

namespace NotaFiscalAPI.Models
{
  public class AppDbContext : DbContext
  {
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {
    }

    public DbSet<Product> Product { get; set; }
  }
}
