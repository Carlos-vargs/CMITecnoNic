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
    public class IndicatorsController : Controller
    {
        private CMIModelContainer db = new CMIModelContainer();

        // GET: Indicators
        public ActionResult Index()
        {
            var indicatorSet = db.IndicatorSet.Include(i => i.Objective).Include(i => i.MetricType);
            return View(indicatorSet.ToList());
        }

        // GET: Indicators/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Indicator indicator = db.IndicatorSet
                .Include(i => i.MetricType)
                .Include(i => i.DataIndicator)  
                .Include(i => i.Target)         
                .FirstOrDefault(i => i.Id == id);

            if (indicator == null)
            {
                return HttpNotFound();
            }

            var response = new
            {
                Indicator = new
                {
                    Id = indicator.Id,
                    Name = indicator.Name,
                    Description = indicator.Description,
                    MeasurementFrequency = indicator.MeasurementFrequency,
                    UnitMeasure = indicator.UnitMeasure
                },
                MetricType = new
                {
                    Id = indicator.MetricType.Id,
                    Name = indicator.MetricType.Name
                },
                DataIndicators = indicator.DataIndicator.Select(di => new
                {
                    Id = di.Id,
                    Value = di.Value,
                    Date = di.Date
                }),
                Targets = indicator.Target.Select(t => new
                {
                    Id = t.Id,
                    Description = t.Description,
                    ExpectedValue = t.ExpectedValue,
                    DeadlineDate = t.DeadlineDate
                })
            };

            return Json(response, JsonRequestBehavior.AllowGet);
        }

        // GET: Indicators/Create
        public ActionResult Create()
        {
            ViewBag.ObjectiveId = new SelectList(db.ObjectiveSet, "Id", "Description");
            ViewBag.MetricTypeId = new SelectList(db.MetricTypeSet, "Id", "Name");
            return View();
        }

        // POST: Indicators/Create
        // Para protegerse de ataques de publicación excesiva, habilite las propiedades específicas a las que quiere enlazarse. Para obtener 
        // más detalles, vea https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "Id,Name,Description,MeasurementFrequency,UnitMeasure,ObjectiveId,MetricTypeId")] Indicator indicator, int CMIId)
        {
            if (ModelState.IsValid)
            {
                db.IndicatorSet.Add(indicator);
                db.SaveChanges();
                return RedirectToAction("Details", "CMI", new { id = CMIId });
            }

            return RedirectToAction("Index", "CMI");
        }

        // GET: Indicators/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Indicator indicator = db.IndicatorSet.Find(id);
            if (indicator == null)
            {
                return HttpNotFound();
            }
            ViewBag.ObjectiveId = new SelectList(db.ObjectiveSet, "Id", "Description", indicator.ObjectiveId);
            ViewBag.MetricTypeId = new SelectList(db.MetricTypeSet, "Id", "Name", indicator.MetricTypeId);
            return View(indicator);
        }

        // POST: Indicators/Edit/5
        // Para protegerse de ataques de publicación excesiva, habilite las propiedades específicas a las que quiere enlazarse. Para obtener 
        // más detalles, vea https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "Id,Name,Description,MeasurementFrequency,UnitMeasure,ObjectiveId,MetricTypeId")] Indicator indicator)
        {
            if (ModelState.IsValid)
            {
                db.Entry(indicator).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            ViewBag.ObjectiveId = new SelectList(db.ObjectiveSet, "Id", "Description", indicator.ObjectiveId);
            ViewBag.MetricTypeId = new SelectList(db.MetricTypeSet, "Id", "Name", indicator.MetricTypeId);
            return View(indicator);
        }

        // GET: Indicators/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Indicator indicator = db.IndicatorSet.Find(id);
            if (indicator == null)
            {
                return HttpNotFound();
            }
            return View(indicator);
        }

        // POST: Indicators/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            Indicator indicator = db.IndicatorSet.Find(id);
            db.IndicatorSet.Remove(indicator);
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
