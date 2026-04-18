using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NotaFiscalAPI.Models;

namespace ProdutosAPI.Controllers
{
  [ApiController]
  [Route("api/[controller]")]
  [EnableCors("AllowAngular")]
  public class ProductController : ControllerBase
  {
    private readonly AppDbContext _context;

    public ProductController(AppDbContext context)
    {
      _context = context;
    }

    [HttpGet("GetProducts")]
    public async Task<IActionResult> GetProducts()
    {
      var result = await _context.Product.ToListAsync();
      return Ok(result);
    }

    [HttpPost("CreateProduct")]
    public async Task<IActionResult> CreateProduct([FromBody] Product product)
    {
      _context.Product.Add(product);
      await _context.SaveChangesAsync();
      return Ok(product);
    }

    [HttpPut("EditProduct")]
    public async Task<IActionResult> EditTaxNote([FromBody] Product product)
    {
      var rows = await _context.Product.Where(x => x.Codigo == product.Codigo)
        .ExecuteUpdateAsync(x => x.SetProperty(x => x.Saldo, product.Saldo));
      return Ok(product);
    }
  }
}
