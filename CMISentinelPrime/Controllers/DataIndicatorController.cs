﻿using CMISentinelPrime.Models;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web.Mvc;

namespace CMISentinelPrime.Controllers
{
    public class DataIndicatorController : Controller
    {
        private CMIModelContainer db = new CMIModelContainer();

        // GET: DataIndicator
        public ActionResult Index()
        {
            var dataIndicatorSet = db.DataIndicatorSet.Include(d => d.Indicator);
            return View(dataIndicatorSet.ToList());
        }

        // GET: DataIndicator/Details/5
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

        // GET: DataIndicator/Create
        public ActionResult Create()
        {
            ViewBag.IndicatorId = new SelectList(db.IndicatorSet, "Id", "Name");
            return View();
        }

        // POST: DataIndicator/Create
        // Para protegerse de ataques de publicación excesiva, habilite las propiedades específicas a las que quiere enlazarse. Para obtener 
        // más detalles, vea https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "Id,Value,Date,IndicatorId")] DataIndicator dataIndicator)
        {
            if (ModelState.IsValid)
            {
                db.DataIndicatorSet.Add(dataIndicator);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            ViewBag.IndicatorId = new SelectList(db.IndicatorSet, "Id", "Name", dataIndicator.IndicatorId);
            return View(dataIndicator);
        }

        // GET: DataIndicator/Edit/5
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

        // POST: DataIndicator/Edit/5
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

        // GET: DataIndicator/Delete/5
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

        // POST: DataIndicator/Delete/5
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
