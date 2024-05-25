﻿using CMISentinelPrime.Models;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web.Mvc;

namespace CMISentinelPrime.Controllers
{
    public class IndicatorController : Controller
    {
        private CMIModelContainer db = new CMIModelContainer();

        // GET: Indicator
        public ActionResult Index()
        {
            var indicatorSet = db.IndicatorSet.Include(i => i.Objective).Include(i => i.MetricType);
            return View(indicatorSet.ToList());
        }

        // GET: Indicator/Details/5
        public ActionResult Details(int? id)
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

        // GET: Indicator/Create
        public ActionResult Create()
        {
            ViewBag.ObjectiveId = new SelectList(db.ObjectiveSet, "Id", "Description");
            ViewBag.MetricTypeId = new SelectList(db.MetricTypeSet, "Id", "Id");
            return View();
        }

        // POST: Indicator/Create
        // Para protegerse de ataques de publicación excesiva, habilite las propiedades específicas a las que quiere enlazarse. Para obtener 
        // más detalles, vea https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "Id,Name,Description,MeasurementFrequency,UnitMeasure,ObjectiveId,MetricTypeId")] Indicator indicator)
        {
            if (ModelState.IsValid)
            {
                db.IndicatorSet.Add(indicator);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            ViewBag.ObjectiveId = new SelectList(db.ObjectiveSet, "Id", "Description", indicator.ObjectiveId);
            ViewBag.MetricTypeId = new SelectList(db.MetricTypeSet, "Id", "Id", indicator.MetricTypeId);
            return View(indicator);
        }

        // GET: Indicator/Edit/5
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
            ViewBag.MetricTypeId = new SelectList(db.MetricTypeSet, "Id", "Id", indicator.MetricTypeId);
            return View(indicator);
        }

        // POST: Indicator/Edit/5
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
            ViewBag.MetricTypeId = new SelectList(db.MetricTypeSet, "Id", "Id", indicator.MetricTypeId);
            return View(indicator);
        }

        // GET: Indicator/Delete/5
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

        // POST: Indicator/Delete/5
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
