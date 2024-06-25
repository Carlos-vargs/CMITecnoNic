using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using CMISentinelPrime.Models;

namespace CMISentinelPrime.Controllers
{
    public class DataIndicatorsController : Controller
    {
        private CMIModelContainer db = new CMIModelContainer();

        // GET: DataIndicators
        public ActionResult Index()
        {
            var dataIndicatorSet = db.DataIndicatorSet.Include(d => d.Indicator);
            return View(dataIndicatorSet.ToList());
        }

        // GET: DataIndicators/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            DataIndicator dataIndicator = db.DataIndicatorSet.Find(id);
            if (dataIndicator == null)
            {
                return HttpNotFound();
            }
            return View(dataIndicator);
        }

        // GET: DataIndicators/Create
        public ActionResult Create()
        {
            ViewBag.IndicatorId = new SelectList(db.IndicatorSet, "Id", "Name");
            return View();
        }

        // POST: DataIndicators/Create
        // Para protegerse de ataques de publicación excesiva, habilite las propiedades específicas a las que quiere enlazarse. Para obtener 
        // más detalles, vea https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        public JsonResult Create(List<DataIndicator> dataIndicators)
        {
            if (ModelState.IsValid)
            {
                foreach (var dataIndicator in dataIndicators)
                {
                    db.DataIndicatorSet.Add(dataIndicator);
                }

                db.SaveChanges();
                return Json(new { success = true, message = "Datos insertados exitosamente." });
            }
            else
            {
                // Recoger los errores de validación
                var errors = ModelState.Values.SelectMany(v => v.Errors.Select(b => b.ErrorMessage));
                return Json(new { success = false, message = "Error en la inserción de datos.", errors = errors });
            }
        }

        // GET: DataIndicators/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            DataIndicator dataIndicator = db.DataIndicatorSet.Find(id);
            if (dataIndicator == null)
            {
                return HttpNotFound();
            }
            ViewBag.IndicatorId = new SelectList(db.IndicatorSet, "Id", "Name", dataIndicator.IndicatorId);
            return View(dataIndicator);
        }

        // POST: DataIndicators/Edit/5
        // Para protegerse de ataques de publicación excesiva, habilite las propiedades específicas a las que quiere enlazarse. Para obtener 
        // más detalles, vea https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "Id,Value,Date,IndicatorId")] DataIndicator dataIndicator)
        {
            if (ModelState.IsValid)
            {
                db.Entry(dataIndicator).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            ViewBag.IndicatorId = new SelectList(db.IndicatorSet, "Id", "Name", dataIndicator.IndicatorId);
            return View(dataIndicator);
        }

        // GET: DataIndicators/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            DataIndicator dataIndicator = db.DataIndicatorSet.Find(id);
            if (dataIndicator == null)
            {
                return HttpNotFound();
            }
            return View(dataIndicator);
        }

        // POST: DataIndicators/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            DataIndicator dataIndicator = db.DataIndicatorSet.Find(id);
            db.DataIndicatorSet.Remove(dataIndicator);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
