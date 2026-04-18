using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NotaFiscalAPI.Models;

namespace NotasFiscaisAPI.Controllers
{
  [ApiController]
  [Route("api/[controller]")]
  [EnableCors("AngularPolicy")]
  public class TaxNoteController : ControllerBase
  {
    private readonly AppDbContext _context;

    public TaxNoteController(AppDbContext context)
    {
      _context = context;
    }

    [HttpGet("GetTaxNotes")]
    public async Task<IActionResult> GetTaxNotes()
    {
      var result = await _context.TaxNote.ToListAsync();
      return Ok(result);
    }

    [HttpPost("CreateTaxNote")]
    public async Task<IActionResult> CreateProduct([FromBody] TaxNote taxNote)
    {
      _context.TaxNote.Add(taxNote);
      await _context.SaveChangesAsync();
      return Ok(taxNote);
    }

    [HttpPut("EditTaxNote")]
    public async Task<IActionResult> EditTaxNote([FromBody] TaxNote taxNote)
    {
      var rows = await _context.TaxNote.Where(x => x.Numeracao == taxNote.Numeracao)
        .ExecuteUpdateAsync(x => x.SetProperty(x => x.Status, taxNote.Status));
      return Ok(taxNote);
    }
  }
}
