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
    public class ObjectivesController : Controller
    {
        private CMIModelContainer db = new CMIModelContainer();

        // GET: Objectives
        public ActionResult Index()
        {
            var objectiveSet = db.ObjectiveSet.Include(o => o.CMI).Include(o => o.Perspective);
            return View(objectiveSet.ToList());
        }

        // GET: Objectives/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Objective objective = db.ObjectiveSet.Find(id);
            if (objective == null)
            {
                return HttpNotFound();
            }
            return View(objective);
        }

        // GET: Objectives/Create
        public ActionResult Create()
        {
            ViewBag.CMIId = new SelectList(db.CMISet, "Id", "Name");
            ViewBag.PerspectiveId = new SelectList(db.PerspectiveSet, "Id", "Name");
            return View();
        }

        // POST: Objectives/Create
        // Para protegerse de ataques de publicación excesiva, habilite las propiedades específicas a las que quiere enlazarse. Para obtener 
        // más detalles, vea https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "Id,Description,Metric,Weighting,CMIId,PerspectiveId")] Objective objective)
        {
            if (ModelState.IsValid)
            {
                db.ObjectiveSet.Add(objective);
                db.SaveChanges();
                return RedirectToAction("Details", "CMI", new { id = objective.CMIId });
            }

            return RedirectToAction("Index", "CMI");
        }

        // GET: Objectives/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Objective objective = db.ObjectiveSet.Find(id);
            if (objective == null)
            {
                return HttpNotFound();
            }
            ViewBag.CMIId = new SelectList(db.CMISet, "Id", "Name", objective.CMIId);
            ViewBag.PerspectiveId = new SelectList(db.PerspectiveSet, "Id", "Name", objective.PerspectiveId);
            return View(objective);
        }

        // POST: Objectives/Edit/5
        // Para protegerse de ataques de publicación excesiva, habilite las propiedades específicas a las que quiere enlazarse. Para obtener 
        // más detalles, vea https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "Id,Description,Metric,Weighting,CMIId,PerspectiveId")] Objective objective)
        {
            if (ModelState.IsValid)
            {
                db.Entry(objective).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            ViewBag.CMIId = new SelectList(db.CMISet, "Id", "Name", objective.CMIId);
            ViewBag.PerspectiveId = new SelectList(db.PerspectiveSet, "Id", "Name", objective.PerspectiveId);
            return View(objective);
        }

        // GET: Objectives/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Objective objective = db.ObjectiveSet.Find(id);
            if (objective == null)
            {
                return HttpNotFound();
            }
            return View(objective);
        }

        // POST: Objectives/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id, int CmiId)
        {
            Objective objective = db.ObjectiveSet.Find(id);
            db.ObjectiveSet.Remove(objective);
            db.SaveChanges();
            return RedirectToAction("Details", "CMI", new { id = CmiId });
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
