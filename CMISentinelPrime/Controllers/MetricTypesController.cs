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
    public class MetricTypesController : Controller
    {
        private CMIModelContainer db = new CMIModelContainer();

        // GET: MetricTypes
        public ActionResult Index()
        {
            return View(db.MetricTypeSet.ToList());
        }

        // GET: MetricTypes/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            MetricType metricType = db.MetricTypeSet.Find(id);
            if (metricType == null)
            {
                return HttpNotFound();
            }
            return View(metricType);
        }

        // GET: MetricTypes/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: MetricTypes/Create
        // Para protegerse de ataques de publicación excesiva, habilite las propiedades específicas a las que quiere enlazarse. Para obtener 
        // más detalles, vea https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "Id,Name")] MetricType metricType)
        {
            if (ModelState.IsValid)
            {
                db.MetricTypeSet.Add(metricType);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(metricType);
        }

        // GET: MetricTypes/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            MetricType metricType = db.MetricTypeSet.Find(id);
            if (metricType == null)
            {
                return HttpNotFound();
            }
            return View(metricType);
        }

        // POST: MetricTypes/Edit/5
        // Para protegerse de ataques de publicación excesiva, habilite las propiedades específicas a las que quiere enlazarse. Para obtener 
        // más detalles, vea https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "Id,Name")] MetricType metricType)
        {
            if (ModelState.IsValid)
            {
                db.Entry(metricType).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(metricType);
        }

        // GET: MetricTypes/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            MetricType metricType = db.MetricTypeSet.Find(id);
            if (metricType == null)
            {
                return HttpNotFound();
            }
            return View(metricType);
        }

        // POST: MetricTypes/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            MetricType metricType = db.MetricTypeSet.Find(id);
            db.MetricTypeSet.Remove(metricType);
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
