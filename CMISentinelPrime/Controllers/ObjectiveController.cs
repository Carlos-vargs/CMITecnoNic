using CMISentinelPrime.Models;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web.Mvc;

namespace CMISentinelPrime.Controllers
{
    public class ObjectiveController : Controller
    {
        private CMIModelContainer db = new CMIModelContainer();

        // GET: Objective
        public ActionResult Index()
        {
            var ObjectiveSet = db.ObjectiveSet.Include(o => o.CMI).Include(o => o.Perspective);
            return View(ObjectiveSet.ToList());
        }

        // GET: Objective/Details/5
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

        // GET: Objective/Create
        public ActionResult Create()
        {
            ViewBag.CMIId = new SelectList(db.CMISet, "Id", "Name");
            ViewBag.PerspectiveId = new SelectList(db.PerspectiveSet, "Id", "Name");
            return View();
        }

        // POST: Objective/Create
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

        // GET: Objective/Edit/5
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

        // POST: Objective/Edit/5
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

        // GET: Objective/Delete/5
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

        // POST: Objective/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            Objective objective = db.ObjectiveSet.Find(id);
            db.ObjectiveSet.Remove(objective);
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
