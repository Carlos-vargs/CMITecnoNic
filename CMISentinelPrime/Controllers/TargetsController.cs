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
    public class TargetsController : Controller
    {
        private CMIModelContainer db = new CMIModelContainer();

        // GET: Targets
        public ActionResult Index()
        {
            var targetSet = db.TargetSet.Include(t => t.Indicator);
            return View(targetSet.ToList());
        }

        // GET: Targets/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Target target = db.TargetSet.Find(id);
            if (target == null)
            {
                return HttpNotFound();
            }
            return View(target);
        }

        // GET: Targets/Create
        public ActionResult Create()
        {
            ViewBag.IndicatorId = new SelectList(db.IndicatorSet, "Id", "Name");
            return View();
        }

        // POST: Targets/Create
        // Para protegerse de ataques de publicación excesiva, habilite las propiedades específicas a las que quiere enlazarse. Para obtener 
        // más detalles, vea https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "Id,Description,ExpectedValue,DeadlineDate,IndicatorId")] Target target)
        {
            if (ModelState.IsValid)
            {
                db.TargetSet.Add(target);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            ViewBag.IndicatorId = new SelectList(db.IndicatorSet, "Id", "Name", target.IndicatorId);
            return View(target);
        }

        // GET: Targets/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Target target = db.TargetSet.Find(id);
            if (target == null)
            {
                return HttpNotFound();
            }
            ViewBag.IndicatorId = new SelectList(db.IndicatorSet, "Id", "Name", target.IndicatorId);
            return View(target);
        }

        // POST: Targets/Edit/5
        // Para protegerse de ataques de publicación excesiva, habilite las propiedades específicas a las que quiere enlazarse. Para obtener 
        // más detalles, vea https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "Id,Description,ExpectedValue,DeadlineDate,IndicatorId")] Target target)
        {
            if (ModelState.IsValid)
            {
                db.Entry(target).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            ViewBag.IndicatorId = new SelectList(db.IndicatorSet, "Id", "Name", target.IndicatorId);
            return View(target);
        }

        // GET: Targets/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Target target = db.TargetSet.Find(id);
            if (target == null)
            {
                return HttpNotFound();
            }
            return View(target);
        }

        // POST: Targets/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            Target target = db.TargetSet.Find(id);
            db.TargetSet.Remove(target);
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
