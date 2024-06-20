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
    public class PerspectivesController : Controller
    {
        private CMIModelContainer db = new CMIModelContainer();

        // GET: Perspectives
        public ActionResult Index()
        {
            return View(db.PerspectiveSet.ToList());
        }

        // GET: Perspectives/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Perspective perspective = db.PerspectiveSet.Find(id);
            if (perspective == null)
            {
                return HttpNotFound();
            }
            return View(perspective);
        }

        // GET: Perspectives/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Perspectives/Create
        // Para protegerse de ataques de publicación excesiva, habilite las propiedades específicas a las que quiere enlazarse. Para obtener 
        // más detalles, vea https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "Id,Name")] Perspective perspective)
        {
            if (ModelState.IsValid)
            {
                db.PerspectiveSet.Add(perspective);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(perspective);
        }

        // GET: Perspectives/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Perspective perspective = db.PerspectiveSet.Find(id);
            if (perspective == null)
            {
                return HttpNotFound();
            }
            return View(perspective);
        }

        // POST: Perspectives/Edit/5
        // Para protegerse de ataques de publicación excesiva, habilite las propiedades específicas a las que quiere enlazarse. Para obtener 
        // más detalles, vea https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "Id,Name")] Perspective perspective)
        {
            if (ModelState.IsValid)
            {
                db.Entry(perspective).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(perspective);
        }

        // GET: Perspectives/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Perspective perspective = db.PerspectiveSet.Find(id);
            if (perspective == null)
            {
                return HttpNotFound();
            }
            return View(perspective);
        }

        // POST: Perspectives/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            Perspective perspective = db.PerspectiveSet.Find(id);
            db.PerspectiveSet.Remove(perspective);
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
