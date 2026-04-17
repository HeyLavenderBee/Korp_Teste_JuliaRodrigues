using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace NotaFiscalAPI.Models
{
  [Table("notas_fiscais")]
  public class TaxNote
  {
    [Key]
    [Column("numeracao")]
    public string Numeracao { get; set; }

    [Column("status")]
    public char Status { get; set; }

    public TaxNote(string numeracao, char status)
    {
      Numeracao = numeracao;
      Status = status;
    }
  }
}
