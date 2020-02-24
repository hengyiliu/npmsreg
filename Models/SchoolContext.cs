using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace npmsreg.Models
{
    public partial class SchoolContext : DbContext
    {
        public SchoolContext()
        {
        }

        public SchoolContext(DbContextOptions<SchoolContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Families> Families { get; set; }
        public virtual DbSet<Payments> Payments { get; set; }
        public virtual DbSet<Registrations> Registrations { get; set; }
        public virtual DbSet<Students> Students { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
// To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Server=(localdb)\\mssqllocaldb;Database=School;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Families>(entity =>
            {
                entity.Property(e => e.Address).HasMaxLength(200);

                entity.Property(e => e.City).HasMaxLength(50);

                entity.Property(e => e.FatherChineseName).HasMaxLength(50);

                entity.Property(e => e.FatherEmail).HasMaxLength(100);

                entity.Property(e => e.FatherHelpArea).HasMaxLength(100);

                entity.Property(e => e.FatherName).HasMaxLength(100);

                entity.Property(e => e.FatherOccupation).HasMaxLength(100);

                entity.Property(e => e.FatherPhone).HasMaxLength(50);

                entity.Property(e => e.MotherChineseName).HasMaxLength(50);

                entity.Property(e => e.MotherEmail).HasMaxLength(100);

                entity.Property(e => e.MotherHelpArea).HasMaxLength(100);

                entity.Property(e => e.MotherName).HasMaxLength(100);

                entity.Property(e => e.MotherOccupation).HasMaxLength(100);

                entity.Property(e => e.MotherPhone).HasMaxLength(50);

                entity.Property(e => e.SpokenLanguages)
                    .IsRequired()
                    .HasMaxLength(100);

                entity.Property(e => e.State).HasMaxLength(50);

                entity.Property(e => e.ZipCode).HasMaxLength(50);
            });

            modelBuilder.Entity<Payments>(entity =>
            {
                entity.Property(e => e.Amount).HasColumnType("decimal(18, 0)");

                entity.Property(e => e.Method).HasMaxLength(50);

                entity.Property(e => e.TransactionRef).HasMaxLength(255);

                entity.HasOne(d => d.Family)
                    .WithMany(p => p.Payments)
                    .HasForeignKey(d => d.FamilyId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Payments_Families");
            });

            modelBuilder.Entity<Registrations>(entity =>
            {
                entity.HasKey(e => new { e.SchoolYear, e.StudentId });

                entity.Property(e => e.Grade)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.HasOne(d => d.Student)
                    .WithMany(p => p.Registrations)
                    .HasForeignKey(d => d.StudentId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Registrations_Students");
            });

            modelBuilder.Entity<Students>(entity =>
            {
                entity.Property(e => e.Birthday).HasColumnType("date");

                entity.Property(e => e.ChineseName).HasMaxLength(20);

                entity.Property(e => e.FirstName)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.Gender)
                    .IsRequired()
                    .HasMaxLength(10);

                entity.Property(e => e.LastName)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.HasOne(d => d.Family)
                    .WithMany(p => p.Students)
                    .HasForeignKey(d => d.FamilyId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Students_Families");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
